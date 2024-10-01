import { NextResponse } from "next/server";

import JSONData from "./heroes.json";

export async function GET() {
  const data = JSONData;

  return NextResponse.json({ data });
}
