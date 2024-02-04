"use server";
import { cookies } from "next/headers";

export async function create(token: string) {
  cookies().set({ name: "userToken", value: token, httpOnly: true });
}

export async function obtain() {
  if (cookies().has("userToken")) {
    return cookies().get("userToken");
  }
}

export async function remove(tokenName: string) {
  cookies().delete(tokenName);
}
