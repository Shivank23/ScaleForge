import type { VercelRequest, VercelResponse } from "@vercel/node";
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    "postgresql://postgres.yqzjtmsxuveckjmatwuu:Gurgaon%40471062@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres",
  ssl: { rejectUnauthorized: false },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    try {
      const {
        icp_name,
        monthly_leads,
        deal_value_acv,
        projected_pipeline,
        projected_closed_revenue,
        roi_multiple,
        contact_email,
      } = req.body || {};

      const query = `
        INSERT INTO public.pipeline_simulations (
          icp_name,
          monthly_leads,
          deal_value_acv,
          projected_pipeline,
          projected_closed_revenue,
          roi_multiple,
          contact_email
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `;
      const values = [
        icp_name || "Enterprise ICP",
        monthly_leads || 0,
        deal_value_acv || 0,
        projected_pipeline || 0,
        projected_closed_revenue || 0,
        roi_multiple || 0,
        contact_email || null,
      ];

      const result = await pool.query(query, values);
      return res.status(200).json({ success: true, data: result.rows[0] });
    } catch (err: unknown) {
      console.error("Simulation API Error:", err);
      const message = err instanceof Error ? err.message : "Internal Database Error";
      return res.status(500).json({ error: message });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
