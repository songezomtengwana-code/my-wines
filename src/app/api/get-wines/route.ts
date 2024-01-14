import { db } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET() {
  const client = await db.connect();
  let wines;
  
  try {
    wines = await client.sql`SELECT * FROM Wines;`;
  } catch (error) {
    return NextResponse.json({ error });
  }
 
  return NextResponse.json({ data: wines });
}