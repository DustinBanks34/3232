import { NextResponse, NextRequest } from "next/server";

interface ReqContext {
    params: {
        zipcode: number;
    }
}

export async function GET( req: NextRequest, context: ReqContext ): Promise<NextResponse> {
    // Await context.params in case it is asynchronous
const { params } = context;

    return NextResponse.json(
        {
            zipcode: context.params.zipcode,
            weather: "sunny",
            temp: 35,
        },
        {status: 200}
    );
}

