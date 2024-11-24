/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.json({ message: "Hello World test" });

  return res;
}
