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
      const { company_name, email, stage, score, readiness_grade, answers } = req.body || {};

      if (!company_name || !email) {
        return res.status(400).json({ error: "Company name and email are required." });
      }

      const query = `
        INSERT INTO public.diagnostic_assessments (
          company_name,
          email,
          stage,
          score,
          readiness_grade,
          answers
        )
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *;
      `;
      const values = [
        company_name,
        email,
        stage || "Growth",
        score || 0,
        readiness_grade || "B",
        JSON.stringify(answers || {}),
      ];

      const result = await pool.query(query, values);
      return res.status(200).json({ success: true, data: result.rows[0] });
    } catch (err: unknown) {
      console.error("Diagnostic API Error:", err);
      const message = err instanceof Error ? err.message : "Internal Database Error";
      return res.status(500).json({ error: message });
    }
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
