"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaStore } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";
import { remove } from "@/app/action";

type DecodeTokenType = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

type PropsType = {
  userToken: { value: string; name: string };
};

const Navbar = ({ userToken }: PropsType) => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);
  let decodedToken: DecodeTokenType | null = null;
  if (userToken.value) {
    decodedToken = jwtDecode(userToken?.value);
  }
  const { email, image } = decodedToken || { email: "", image: "" };

  const handleClick = () => setNav(!nav);

  function handleAvatar() {
    // console.log("image clicked");
    setOpen((prev) => !prev);
  }

  function handleLogOut() {
    setNav(false);
    remove("userToken");
  }

  return (
    <nav>
      <div
        className={`relative z-10  h-[60px] w-screen shadow-lg sm:h-[80px] ${!nav ? "" : "mb-52"}`}
      >
        <div className="flex h-full w-full items-center justify-between px-2">
          <Link href="/">
            <FaStore className=" h-8 w-16 text-myColor-600 sm:h-14" />
          </Link>
          <ul className="hidden items-center gap-x-60 lg:flex">
            <li className=" rounded-lg text-xl">
              <Link
                className={`rounded-lg p-2 text-xl font-light ${pathname == "/product" ? "bg-myColor-600 text-stone-100" : ""}`}
                href="/product"
              >
                PRODUCTS
              </Link>
            </li>

            <li className="rounded-lg  p-4 text-xl">
              <Link
                className={`rounded-lg p-2 text-xl font-light ${pathname == "/stats" ? "bg-myColor-600 text-stone-100" : ""}`}
                href="/stats"
              >
                STATS
              </Link>
            </li>
          </ul>

          <div className="mx-16 hidden lg:flex">
            {userToken.value && (
              <div
                className="relative h-12 w-16 cursor-pointer px-8 "
                onClick={handleAvatar}
              >
                <Image
                  src={image}
                  alt="user profile"
                  fill
                  sizes="(min-width: 200px) 50vw,(min-width:768px) 100vw"
                  priority={false}
                  quality={50}
                />

                <ul
                  className={
                    !open
                      ? "hidden"
                      : "absolute  right-2  top-2 z-10 mt-6 w-[200px] rounded-2xl bg-white px-4 py-4"
                  }
                >
                  <div className="text-[#474bd8]">{email}</div>
                  <li
                    onClick={handleLogOut}
                    className="w-full hover:bg-gray-200"
                  >
                    Log Out
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="block lg:hidden" onClick={handleClick}>
            {!nav ? (
              <IoMenu className="h-8 w-10 cursor-pointer" />
            ) : (
              <RxCross1 className="h-8 w-10 cursor-pointer" />
            )}
          </div>
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "mt-2 flex w-full flex-col items-center justify-around  gap-2 rounded-lg px-8 py-4 text-center shadow-lg lg:hidden"
          }
        >
          {userToken.value && (
            <li className="flex w-full items-center justify-center gap-4">
              <div className="relative h-8 w-8">
                <Image src={image} alt="user profile" fill />
              </div>
              <div className="text-[#474bd8]">{email}</div>
            </li>
          )}
          <li className="w-full">
            <Link
              href="/product"
              className={`rounded-lg bg-myColor-100 p-1 text-base font-normal ${pathname == "/product" ? "bg-myColor-600 text-stone-100" : ""}`}
            >
              Products
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/stats"
              className={`rounded-lg bg-myColor-100 p-1 px-2 text-base  font-normal ${pathname == "/stats" ? "bg-myColor-600 text-stone-100" : ""}`}
            >
              Stats
            </Link>
          </li>
          {userToken.value && (
            <li
              onClick={handleLogOut}
              className="cursor-pointer rounded-lg bg-[#ec41c1] p-2"
            >
              Log Out
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
