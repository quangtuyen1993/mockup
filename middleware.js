import { faker } from "@faker-js/faker";
import { NextRequest, NextResponse } from "next/server";

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: "/api/:function*",
};

export function middleware(req) {
  var { searchParams } = req.nextUrl;
  if (searchParams.get("error") == 1)
    return NextResponse.json(
      {
        success: "Bad Request",
        server_time: faker.date.recent(),
      },
      {
        status: 401,
      }
    );

  return NextResponse.next();
}
