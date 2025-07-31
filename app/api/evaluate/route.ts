import { evaluateProject } from "@/components/actions/evaluate";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const result = await evaluateProject(body);
  return NextResponse.json(result);
}
