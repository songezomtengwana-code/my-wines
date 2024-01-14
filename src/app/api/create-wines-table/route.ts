import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: any) {
  try {
    const result =
      await sql`CREATE TABLE wines (
        id SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        year INTEGER NOT NULL,
        type VARCHAR(20) NOT NULL CHECK (type IN ('Red', 'White', 'Rosé', 'White Blend', 'Red Blend')),
        varietal VARCHAR(50) NOT NULL,
        rating FLOAT CHECK (rating BETWEEN 1 AND 5),
        consumed BOOLEAN,
        date_consumed VARCHAR(50)
      );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}