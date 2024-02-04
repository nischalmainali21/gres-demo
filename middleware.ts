import { NextRequest, NextResponse } from "next/server";
import { obtain, isExpired } from "./app/action";

const protectedRoutes = ["/product"];

export default async function middleware(request: NextRequest) {
  const userToken = await obtain();

  if (!userToken && request.nextUrl.pathname.startsWith("/product")) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (userToken) {
    if (
      (await isExpired(userToken.value)) &&
      request.nextUrl.pathname.startsWith("/product")
    ) {
      // Handle token removal or redirection if needed
      console.log("Token has expired");
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }
}
