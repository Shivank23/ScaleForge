import type { VercelRequest, VercelResponse } from "@vercel/node";
import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString:
    process.env.DATABASE_URL ||
    process.env.POSTGRES_URL ||
    "postgresql://postgres:Gurgaon%40471062@db.yqzjtmsxuveckjmatwuu.supabase.co:5432/postgres",
  ssl: { rejectUnauthorized: false },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
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
      const { name, email, company, priority, selected_date, selected_time, notes } = req.body || {};

      if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required." });
      }

      const query = `
        INSERT INTO public.consultation_bookings (name, email, company, priority, selected_date, selected_time, notes)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *;
      `;
      const values = [
        name,
        email,
        company || "Enterprise Lead",
        priority || "Full Client System",
        selected_date || "THU 24",
        selected_time || "10:00 AM",
        notes || null,
      ];

      const result = await pool.query(query, values);
      return res.status(200).json({ success: true, data: result.rows[0] });
    } catch (err: unknown) {
      console.error("Booking API Error:", err);
      const message = err instanceof Error ? err.message : "Internal Database Error";
      return res.status(500).json({ error: message });
    }
  }

  if (req.method === "GET") {
    try {
      const result = await pool.query(
        "SELECT * FROM public.consultation_bookings ORDER BY created_at DESC LIMIT 50;"
      );
      return res.status(200).json({ success: true, data: result.rows });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Internal Database Error";
      return res.status(500).json({ error: message });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
