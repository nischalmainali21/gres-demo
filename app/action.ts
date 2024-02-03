"use server";
import { cookies } from "next/headers";

export async function create(token: string) {
  cookies().set("userToken", token, { expires: 7 });
  if (cookies().has("userToken")) {
    console.log("usetoken saved");
  }
}

export async function obtain() {
  if (cookies().has("userToken")) {
    console.log("usetoken is there");
    cookies().get("userToken");
  } else {
    console.log("not obtained");
  }
}
