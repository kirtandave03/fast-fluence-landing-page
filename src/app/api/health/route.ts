import { NextResponse } from "next/server";
import { getDataSource } from "@/lib/data-source";

export async function GET() {
  try {
    const dataSource = await getDataSource();
    
    // Test the connection by running a simple query
    await dataSource.query("SELECT 1");
    
    return NextResponse.json(
      {
        status: "healthy",
        database: "connected",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        status: "unhealthy",
        database: "disconnected",
        error: error.message,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}

