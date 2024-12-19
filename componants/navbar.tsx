
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div>
            <header>
                <nav className="flex w-full bg-black h-32 mt-12 space-x-2 px-10" >
               <div className="w-56 bg-orange-500 h-28"></div>
               
               <div className="flex gap-10 w-full justify-end mt-10 space-x-2 px-6">
               <div className="w-40 bg-lime-400 h-14"></div>
               <div className="w-40 bg-teal-400 h-14"></div>
               <div className="w-40 bg-violet-400 h-14"></div>
               </div>
               </nav>
               </header>

               <div className="flex w-full justify-center mt-20 space-x-4 px-10">
               <div className="bg-green-500 h-60 w-4/12"></div>
               <div className="bg-pink-500 h-60 w-4/12"></div>
               <div className="bg-red-500 h-60 w-4/12"></div>
               </div>
              
               <div className="flex w-full justify-center mt-6 space-x-4 px-10">
               <div className="bg-purple-600 h-60 w-6/12"></div>
               <div className="bg-blue-400 h-60 w-6/12"></div>
               </div>
               </div>
               );
               }