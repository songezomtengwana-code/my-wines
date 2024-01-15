import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const year = searchParams.get("year");
  const type = searchParams.get("type");
  const varietal = searchParams.get("varietal");
  const rating = searchParams.get("rating");
  const consumed = searchParams.get("consumed");
  const date_consumed = searchParams.get("date_consumed");

  try {
    await sql`INSERT INTO wines (name, year, type, varietal, rating, consumed, date_consumed) VALUES (${name}, ${year}, ${type}, ${varietal}, ${rating}, ${consumed}, ${date_consumed})`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const pets = await sql`SELECT * FROM Wines;`;
  return NextResponse.json({ pets }, { status: 200 });
}

// import { sql } from "@vercel/postgres";
// import { NextApiResponse, NextApiRequest } from "next";

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   try {
//     await sql`INSERT INTO wines (name, year, type, varietal, rating, consumed, date_consumed)
//                 VALUES (${req.body.name}, ${req.body.year}, ${req.body.type}, ${req.body.type}, ${req.body.rating}, ${req.body.consumed}, ${req.body.date_consumed})`;

//     res.status(201).json({ message: "Wine added successfully!" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Failed to add wine" });
//   }
// };

// export default handler;
