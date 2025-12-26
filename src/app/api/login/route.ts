import { NextRequest, NextResponse } from "next/server";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400, headers: corsHeaders }
      );
    }

    if (email === "admin@gmail.com" && password === "admin@123") {
      return NextResponse.json(
        { message: "Login successful", email: "admin@gmail.com" },
        { status: 200, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401, headers: corsHeaders }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function OPTIONS() {
  return NextResponse.json({}, { status: 200, headers: corsHeaders });
}

