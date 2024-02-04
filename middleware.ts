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
      console.log("token has expired");
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

  if (decodedToken.exp) {
    return decodedToken.exp < currentTimestamp;
  }
}

// function shouldRefreshToken(token: string) {
//   const expiryThreshold = 15 * 60 * 1000; // 15 minutes in milliseconds
//   const currentTimestamp = Date.now();
//   const decodedToken = jwtDecode(token);
//   if (decodedToken.exp) {
//     return decodedToken.exp - currentTimestamp < expiryThreshold;
//   }
// }

//will not work as create() can only be called in server action or router handler

// async function refresh(token: string) {
//   const userData = await fetch("https://dummyjson.com/auth/me", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((res) => res.json());
//   const { username, password } = userData;

//   const response = await fetch("https://dummyjson.com/auth/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: username,
//       password: password,
//     }),
//   });
//   if (response.ok) {
//     const data = await response.json();
//     // await create(data.token);
//   }
// }
