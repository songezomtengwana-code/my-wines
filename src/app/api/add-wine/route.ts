import { WineData } from "@/app/model/wine.model";
import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const name = searchParams.get("name");
//   const year = searchParams.get("year");
//   const type = searchParams.get("type");
//   const varietal = searchParams.get("varietal");
//   const rating = searchParams.get("rating");
//   const consumed = searchParams.get("consumed");
//   const date_consumed = searchParams.get("date_consumed");

//   try {
//     await sql`INSERT INTO wines (name, year, type, varietal, rating, consumed, date_consumed) VALUES (${data.name}, ${data.year}, ${data.type}, ${data.varietal}, ${data.rating}, ${data.consumed}, ${data.date_consumed})`;
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }

//   const pets = await sql`SELECT * FROM Wines;`;
//   return NextResponse.json({ pets }, { status: 200 });
// }

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (!req.body) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  try {
    const { data }: { data: WineData } = req.body;
    console.log(req.body);

    await sql`INSERT INTO wines (name, year, type, varietal, rating, consumed, date_consumed) VALUES (${data.name}, ${data.year}, ${data.type}, ${data.varietal}, ${data.rating}, ${data.consumed}, ${data.date_consumed})`;
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
