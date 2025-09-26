import { NextResponse } from "next/server";

export async function GET(req: Request) {

    return NextResponse.json({
        message: 'Tarea completada con éxito!',
        count: {
            value: 800
        }
    });
}