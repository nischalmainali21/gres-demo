import { NextRequest, NextResponse } from "next/server";
import { obtain, remove } from "./app/action";
import { jwtDecode } from "jwt-decode";

const protectedRoutes = ["/product"];

export default async function middleware(request: NextRequest) {
  const userToken = await obtain();
  //check for token expiry
  if (userToken) {
    const isTokenExpired = isExpired(userToken?.value);
    if (isTokenExpired) {
      await remove("userToken"); //also delete the expired token
      //redirect to login page
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }
  if (!userToken && request.nextUrl.pathname.startsWith("/product")) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

function isExpired(token: string) {
  if (!token) {
    return true;
  }
  const decodedToken = jwtDecode(token);
  const currentTimestamp = Math.floor(Date.now() / 1000);

  if (decodedToken?.exp) {
    return decodedToken.exp < currentTimestamp;
  }
}
