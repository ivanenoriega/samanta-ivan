import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://inoriega:KBS3FEPlbiqYH85q@cluster0.rokx1l0.mongodb.net/";
const client = new MongoClient(uri);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, apellido, email, telefono, asistencia } = body;

    // Validate required fields
    if (!nombre || !apellido || !email || asistencia === undefined) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await client.connect();
    const database = client.db("wedding");
    const collection = database.collection("attendance");

    // Create attendance record
    const attendanceRecord = {
      nombre,
      apellido,
      email,
      telefono: telefono || "",
      asistencia,
      fechaConfirmacion: new Date(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
    };

    // Insert the record
    const result = await collection.insertOne(attendanceRecord);

    // Close the connection
    await client.close();

    return NextResponse.json({
      success: true,
      message: "Attendance confirmed successfully",
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Error confirming attendance:", error);

    // Try to close the connection if it's still open
    try {
      await client.close();
    } catch (closeError) {
      console.error("Error closing MongoDB connection:", closeError);
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
