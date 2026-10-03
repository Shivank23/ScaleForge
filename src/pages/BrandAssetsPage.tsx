import React, { useState } from "react";
import { 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  FileArchive, 
  Sparkles, 
  Layers, 
  Eye, 
  Grid, 
  Maximize2 
} from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

interface AssetRecord {
  id: string;
  name: string;
  category: "LinkedIn & Social" | "Master Logos" | "Vectors & Web";
  filename: string;
  path: string;
  resolution: string;
  format: string;
  sizeEstimate: string;
  bestFor: string;
  previewBg: "transparent" | "dark" | "banner";
  recommended?: boolean;
}

const BRAND_ASSETS: AssetRecord[] = [
  {
    id: "linkedin-avatar",
    name: "LinkedIn Company Profile Avatar",
    category: "LinkedIn & Social",
    filename: "linkedin-logo.png",
    path: "/linkedin-logo.png",
    resolution: "1200 × 1200 px",
    format: "32-bit PNG (Alpha)",
    sizeEstimate: "395 KB",
    bestFor: "LinkedIn Company Page Profile Photo (15% safe padding prevents circle crop clipping)",
    previewBg: "transparent",
    recommended: true,
  },
  {
    id: "linkedin-avatar-dark",
    name: "LinkedIn Avatar (Cyber Dark Edition)",
    category: "LinkedIn & Social",
    filename: "linkedin-logo-dark.png",
    path: "/linkedin-logo-dark.png",
    resolution: "1200 × 1200 px",
    format: "PNG (Solid Dark #060913)",
    sizeEstimate: "393 KB",
    bestFor: "Social profile avatars where a dark background looks sharp and cohesive",
    previewBg: "dark",
  },
  {
    id: "linkedin-banner",
    name: "LinkedIn Official Cover Banner",
    category: "LinkedIn & Social",
    filename: "linkedin-banner.png",
    path: "/linkedin-banner.png",
    resolution: "1584 × 396 px",
    format: "PNG (16-bit)",
    sizeEstimate: "209 KB",
    bestFor: "Official LinkedIn Company Page Top Banner / Header (4:1 Ratio)",
    previewBg: "banner",
    recommended: true,
  },
  {
    id: "logo-4k",
    name: "4K Ultra-HD Master Logo",
    category: "Master Logos",
    filename: "logo-4k.png",
    path: "/logo-4k.png",
    resolution: "4096 × 4096 px",
    format: "32-bit PNG (Lossless)",
    sizeEstimate: "2.05 MB",
    bestFor: "Master brand asset, 4K displays, pitch decks, merchandise & high-DPI prints",
    previewBg: "transparent",
  },
  {
    id: "logo-2k",
    name: "2K High-Res Primary Logo",
    category: "Master Logos",
    filename: "logo.png",
    path: "/logo.png",
    resolution: "2048 × 2048 px",
    format: "32-bit PNG (Alpha)",
    sizeEstimate: "760 KB",
    bestFor: "Standard high-res transparent logo for website, marketing collaterals & apps",
    previewBg: "transparent",
    recommended: true,
  },
  {
    id: "logo-1024",
    name: "1024px Medium Logo",
    category: "Master Logos",
    filename: "logo-1024.png",
    path: "/logo-1024.png",
    resolution: "1024 × 1024 px",
    format: "32-bit PNG (Alpha)",
    sizeEstimate: "383 KB",
    bestFor: "Medium resolution embeds, email signatures, SaaS integrations",
    previewBg: "transparent",
  },
  {
    id: "logo-svg",
    name: "Vector SVG Master",
    category: "Vectors & Web",
    filename: "logo.svg",
    path: "/logo.svg",
    resolution: "Scalable Vector (Infinite)",
    format: "Scalable Vector XML (SVG)",
    sizeEstimate: "991 KB",
    bestFor: "Lossless crisp scaling at any resolution without pixel degradation",
    previewBg: "transparent",
    recommended: true,
  },
  {
    id: "favicon-512",
    name: "High-DPI App Icon & Favicon",
    category: "Vectors & Web",
    filename: "favicon.png",
    path: "/favicon.png",
    resolution: "512 × 512 px",
    format: "PNG",
    sizeEstimate: "138 KB",
    bestFor: "Browser tabs, Apple touch icons, PWA manifests & mobile shortcuts",
    previewBg: "transparent",
  },
];

export const BrandAssetsPage: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isZipping, setIsZipping] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [bgMode, setBgMode] = useState<"dark" | "checkered" | "light">("dark");

  const categories = ["All", "LinkedIn & Social", "Master Logos", "Vectors & Web"];

  const filteredAssets = selectedCategory === "All"
    ? BRAND_ASSETS
    : BRAND_ASSETS.filter((a) => a.category === selectedCategory);

  // Trigger individual direct file download
  const handleDownload = async (asset: AssetRecord) => {
    try {
      const response = await fetch(asset.path);
      const blob = await response.blob();
      saveAs(blob, asset.filename);
    } catch {
      // Fallback direct link trigger
      const link = document.createElement("a");
      link.href = asset.path;
      link.download = asset.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Copy direct public URL to clipboard
  const handleCopyLink = (asset: AssetRecord) => {
    const fullUrl = `${window.location.origin}${asset.path}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedId(asset.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // One-Click Bulk Zip Downloader
  const handleDownloadAllZip = async () => {
    try {
      setIsZipping(true);
      const zip = new JSZip();
      const folder = zip.folder("ScaleForge-Brand-Assets");

      for (const asset of BRAND_ASSETS) {
        try {
          const response = await fetch(asset.path);
          const blob = await response.blob();
          folder?.file(asset.filename, blob);
        } catch (err) {
          console.error(`Failed to bundle ${asset.filename}:`, err);
        }
      }

      // Add README info file inside ZIP
      folder?.file(
        "README-ScaleForge-Assets.txt",
        `SCALEFORGE OFFICIAL BRAND ASSETS VAULT
=============================================
Full-cycle revenue infrastructure & engineering-grade pipeline systems.

ASSET SUMMARY:
1. linkedin-logo.png (1200x1200) - Recommended LinkedIn Company Page Avatar (With circle safe-zone padding).
2. linkedin-logo-dark.png (1200x1200) - Dark theme avatar for social profiles.
3. linkedin-banner.png (1584x396) - Official LinkedIn Company Header Banner.
4. logo-4k.png (4096x4096) - 4K Master Ultra-HD PNG.
5. logo.png (2048x2048) - 2K Master Transparent Brand Logo.
6. logo-1024.png (1024x1024) - Medium transparent logo.
7. logo-512.png (512x512) - Standard logo icon.
8. logo.svg (Vector) - Lossless infinite resolution vector.
9. favicon.png (512x512) - High-DPI Favicon & Web App icon.

Direct Web Vault: https://scaleforge-sigma.vercel.app/brand-assets
© 2026 ScaleForge Systems Corp. All rights reserved.`
      );

      const zipBlob = await zip.generateAsync({ type: "blob" });
      saveAs(zipBlob, "ScaleForge-Brand-Assets-Pack.zip");
    } catch (err) {
      console.error("Zip generation error:", err);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface pt-28 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Top Header & Intro */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-10 border-b border-outline-variant/30">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-primary-container/10 text-primary-container border border-primary-container/20">
                <Sparkles size={13} />
                PRIVATE ASSETS VAULT
              </span>
              <span className="text-xs font-mono text-on-surface-variant">
                Direct Download &amp; CDN Hub
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-on-surface">
              ScaleForge Brand &amp; Media Assets
            </h1>
            <p className="mt-2 text-sm sm:text-base font-body text-on-surface-variant max-w-2xl">
              High-resolution, uncompressed vector and raster assets specifically calibrated for LinkedIn company pages, 
              4K displays, pitch decks, and brand marketing.
            </p>
          </div>

          {/* Action: Bulk Download ZIP */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleDownloadAllZip}
              disabled={isZipping}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-container text-on-primary-container font-semibold text-sm shadow-lg shadow-primary-container/20 hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 cursor-pointer"
            >
              {isZipping ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span>Packaging Zip...</span>
                </>
              ) : (
                <>
                  <FileArchive size={18} />
                  <span>Download All Assets (.ZIP)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Tips & LinkedIn Guide Box */}
        <div className="mt-8 p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-primary-container/10 text-primary-container shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-on-surface">
                LinkedIn Upload Zero-Compression Tip
              </h3>
              <p className="text-xs text-on-surface-variant font-body mt-0.5">
                For your LinkedIn Company Profile, use <strong className="text-on-surface font-mono">linkedin-logo.png</strong> (1200×1200). 
                It contains exact 15% safe padding so LinkedIn’s circle avatar never clips the edges or compresses into blurry pixels.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0 text-xs font-mono text-on-surface-variant">
            <span>Preview Mode:</span>
            <div className="flex rounded-lg border border-outline-variant/30 p-0.5 bg-surface-container-lowest">
              <button
                onClick={() => setBgMode("dark")}
                className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                  bgMode === "dark" ? "bg-surface-container text-on-surface font-semibold" : "text-on-surface-variant"
                }`}
              >
                Dark
              </button>
              <button
                onClick={() => setBgMode("checkered")}
                className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                  bgMode === "checkered" ? "bg-surface-container text-on-surface font-semibold" : "text-on-surface-variant"
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setBgMode("light")}
                className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                  bgMode === "light" ? "bg-surface-container text-on-surface font-semibold" : "text-on-surface-variant"
                }`}
              >
                Light
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-on-surface text-surface-container-lowest shadow-sm"
                  : "bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Asset Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map((asset) => (
            <div
              key={asset.id}
              className={`group flex flex-col justify-between rounded-2xl bg-surface-container-low border transition-all hover:shadow-xl ${
                asset.recommended
                  ? "border-primary-container/40 ring-1 ring-primary-container/20"
                  : "border-outline-variant/30 hover:border-outline-variant/60"
              }`}
            >
              {/* Card Header & Preview */}
              <div>
                <div className="p-4 flex items-center justify-between border-b border-outline-variant/20">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-medium text-on-surface-variant">
                      {asset.category}
                    </span>
                    {asset.recommended && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-primary-container/20 text-primary-container">
                        RECOMMENDED
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                    {asset.sizeEstimate}
                  </span>
                </div>

                {/* Visual Image Preview Box */}
                <div
                  className={`relative flex items-center justify-center p-8 h-56 transition-colors overflow-hidden ${
                    asset.previewBg === "banner"
                      ? "bg-[#050811]"
                      : bgMode === "dark"
                      ? "bg-[#060913]"
                      : bgMode === "light"
                      ? "bg-slate-100"
                      : "bg-[linear-gradient(45deg,#1e293b_25%,transparent_25%),linear-gradient(-45deg,#1e293b_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#1e293b_75%),linear-gradient(-45deg,transparent_75%,#1e293b_75%)] bg-[size:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0px]"
                  }`}
                >
                  <img
                    src={asset.path}
                    alt={asset.name}
                    className={`max-h-full max-w-full object-contain transition-transform group-hover:scale-105 ${
                      asset.previewBg === "banner" ? "w-full rounded-lg shadow-md" : "h-36 w-36"
                    }`}
                    loading="lazy"
                  />
                  <a
                    href={asset.path}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-3 right-3 p-2 rounded-lg bg-surface-container-lowest/80 text-on-surface-variant hover:text-on-surface backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    title="View Original Asset"
                  >
                    <Maximize2 size={14} />
                  </a>
                </div>

                {/* Details Section */}
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-base font-semibold font-display text-on-surface leading-snug">
                    {asset.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-on-surface-variant">
                    <span className="px-2 py-0.5 rounded bg-surface-container">
                      {asset.resolution}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container">
                      {asset.format}
                    </span>
                  </div>
                  <p className="text-xs font-body text-on-surface-variant mt-1 leading-relaxed">
                    {asset.bestFor}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex items-center gap-2.5">
                <button
                  onClick={() => handleDownload(asset)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-primary-container text-on-primary-container font-semibold text-xs shadow-sm hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                >
                  <Download size={14} />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => handleCopyLink(asset)}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl border border-outline-variant/40 bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer"
                  title="Copy Direct Link"
                >
                  {copiedId === asset.id ? (
                    <Check size={16} className="text-green-400" />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info inside Private Hub */}
        <div className="mt-16 pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-on-surface-variant">
          <div>ScaleForge Private Asset Delivery Service • Host: scaleforge-sigma.vercel.app</div>
          <div className="flex items-center gap-4">
            <span>Direct Public Folder: /public</span>
            <span>Uncompressed 32-bit sRGB</span>
          </div>
        </div>
      </div>
    </div>
  );
};
