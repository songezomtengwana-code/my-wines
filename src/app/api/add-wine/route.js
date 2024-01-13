import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const year = searchParams.get("year");
  const type = searchParams.get("type");
  const varietal = searchParams.get("varietal");
  const rating = searchParams.get("rating");
  const consumed = searchParams.get("consumed");

  try {
    if (!name || !year || !type || !varietal || !rating)
      throw new Error("Pet and owner names required");
    await sql`INSERT INTO wines (name, year, type, varietal, rating, consumed) VALUES (${name}, ${year}, ${type}, ${varietal}, ${rating}, ${consumed})`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const pets = await sql`SELECT * FROM Wines;`;
  return NextResponse.json({ pets }, { status: 200 });
}
