import pg from "pg";

const { Pool } = pg;

let pool;
function getPool() {
  if (!pool) {
    pool = new Pool({ connectionString: process.env.DATABASE_URL });
  }
  return pool;
}

function validateBody(body) {
  const errors = [];
  if (!body.name || typeof body.name !== "string" || body.name.trim().length === 0) {
    errors.push("Name is required");
  }
  if (!body.email || typeof body.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push("A valid email is required");
  }
  if (!body.message || typeof body.message !== "string" || body.message.trim().length === 0) {
    errors.push("Message is required");
  }
  return errors;
}

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ message: "Method Not Allowed" }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ message: "Invalid JSON" }) };
  }

  const errors = validateBody(body);
  if (errors.length > 0) {
    return { statusCode: 400, body: JSON.stringify({ message: errors[0] }) };
  }

  const { name, email, message } = body;

  try {
    const db = getPool();
    const result = await db.query(
      `INSERT INTO messages (name, email, message) VALUES ($1, $2, $3) RETURNING *`,
      [name.trim(), email.trim(), message.trim()]
    );
    return {
      statusCode: 201,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result.rows[0]),
    };
  } catch (err) {
    console.error("DB error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to save message. Please try again." }),
    };
  }
};
