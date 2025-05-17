import React from 'react';
import { IoMdHappy } from "react-icons/io";
import { FaLocationCrosshairs } from "react-icons/fa6";

type Props = {};

export default function navbar({}: Props) {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50" >
        <div className="h-[80px] w-full bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-between max-w-7xl px-6 mx-auto shadow-lg rounded-b-lg border-b border-gray-700">
            <div className="flex items-center justify-center gap-2">
                <h2 className="text-3xl text-gray-200"> ClearSky</h2>    
                <IoMdHappy className="text-2xl mt-1 text-gray-100" />
            </div>
        </div>
        {/*  */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-2 items-center">
            <FaLocationCrosshairs className="text-2xl text-gray-100 hover:opacity-80 cursor-pointer" />
        </div>
    </nav>
  )
}