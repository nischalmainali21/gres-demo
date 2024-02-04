import { NextRequest, NextResponse } from "next/server";
import { obtain, remove } from "./app/action";

const protectedRoutes = ["/product"];

export default async function middleware(request: NextRequest) {
  const userToken = await obtain();

  if (!userToken && request.nextUrl.pathname.startsWith("/product")) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}
