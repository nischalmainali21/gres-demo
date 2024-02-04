"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaStore } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { obtain } from "@/app/action";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";

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
  const handleClick = () => setNav(!nav);
  const [open, setOpen] = useState(false);
  //   console.log(userToken);
  const decodedToken: DecodeTokenType = jwtDecode(userToken.value);
  //   console.log(decodedToken);
  const { email, image } = decodedToken;
  //   console.log(username, email);

  function handleAvatar() {
    console.log("image clicked");
    setOpen((prev) => !prev);
  }

  function handleLogOut() {
    console.log("logout the user");
  }
  return (
    <nav>
      <div
        className={`relative z-10  h-[60px] w-screen shadow-lg sm:h-[80px] ${!nav ? "" : "mb-44"}`}
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
            {/* {!userToken && (
              <div>
                <Link href="/login">
                  <button className="mr-4 rounded-full bg-transparent py-3 text-black hover:bg-indigo-600 hover:text-white lg:px-8">
                    Sign In
                  </button>
                </Link>
              </div>
            )} */}

            {userToken && (
              <div
                className="relative h-12 w-16 cursor-pointer px-8 "
                onClick={handleAvatar}
              >
                <Image src={image} alt="user profile" fill />

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
              <IoMenu className="h-8 w-10" />
            ) : (
              <RxCross1 className="h-8 w-10" />
            )}
          </div>
        </div>

        <ul
          className={
            !nav
              ? "hidden"
              : "mt-2 flex h-[150px] w-full flex-col items-center justify-center  gap-4 rounded-lg px-8 py-8 text-center shadow-lg lg:hidden"
          }
        >
          <li className="flex w-full items-center justify-center gap-4">
            <div className="relative h-8 w-8">
              <Image src={image} alt="user profile" fill />
            </div>
            <div className="text-[#474bd8]">{email}</div>
          </li>
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
          <li onClick={handleLogOut} className="w-full hover:bg-myColor-600">
            Log Out
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
