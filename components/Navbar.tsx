"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaStore } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { obtain } from "@/app/action";
import { jwtDecode } from "jwt-decode";

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
  const { username, email } = decodedToken;
  //   console.log(username, email);
  return (
    <nav>
      <div
        className={`relative z-10  h-[60px] w-screen shadow-lg sm:h-[80px] ${!nav ? "" : "mb-10"}`}
      >
        <div className="flex h-full w-full items-center justify-between px-2">
          <FaStore className=" h-8 w-16 text-myColor-600 sm:h-14" />
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
                className={`text-xl font-light ${pathname == "/analytics" ? "bg-myColor-600 text-stone-100" : ""}`}
                href="/analytics"
              >
                ANALYTICS
              </Link>
            </li>
          </ul>

          <div className="mx-16 hidden lg:flex">
            {/* {!user && <div>
            <Link to="/app/signin">
            <button className="bg-transparent hover:bg-indigo-600 hover:text-white lg:px-8 py-3 text-black mr-4 rounded-full">
               Sign In
            </button>
            </Link>
            <Link to="/app/signup">
            <button className="px-8 py-3 rounded-full">
                Sign Up
            </button>
            </Link>
            </div>} */}

            {/* {user&&<div className="ml-10 mr-10 px-8  " onClick={handleAvatar}>
                <img className="h-[50px] w-[100px]" src={profile} />

                
                <ul className={!open ? 'hidden' : 'absolute mt-3  bg-white rounded-2xl px-4 py-4'} >
                    <div className="text-[#f9a826]">
                    {userName}
                    </div>
                   <a href="http://localhost:3000/app/bookings"> <li className="hover:bg-gray-200 w-full">My Bookings</li></a>
                    <li onClick={handleLogOut} className="hover:bg-gray-200 w-full">Log Out</li>


                </ul>
                
            </div>} */}
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
              : "flex h-[60px] w-full flex-col items-center justify-center gap-2 bg-stone-300 px-8 py-8 text-center lg:hidden"
          }
        >
          <li className="w-full">
            <Link
              href="/product"
              className={`text-base font-normal ${pathname == "/product" ? "bg-myColor-600 text-stone-100" : ""}`}
            >
              Products
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/analytics"
              className={`text-base font-normal ${pathname == "/analytics" ? "bg-myColor-600 text-stone-100" : ""}`}
            >
              Analytics
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
