import { NextRequest, NextResponse } from "next/server";
import { obtain } from "./app/action";

const protectedRoutes = ["/product"];

export default async function middleware(request: NextRequest) {
  const userToken = await obtain();
  //check for token expiry
  if (userToken) {
    const isTokenExpired = isExpired(userToken?.value);
  }
  if (!userToken && request.nextUrl.pathname.startsWith("/product")) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

function isExpired(token: string) {}
