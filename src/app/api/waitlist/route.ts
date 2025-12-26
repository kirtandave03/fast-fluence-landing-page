import { NextRequest, NextResponse } from "next/server";
import { WaitlistService } from "@/services/waitlist.service";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, industry } = body;

    if (!firstName || !lastName || !email || !industry) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    const result = await WaitlistService.upsertUser({
      firstName,
      lastName,
      email,
      industry,
    });

    return NextResponse.json(
      { message: "Success", data: result },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Waitlist API Error:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}

