//import Image from "next/image";
'use client';
import SearchBar from "@/components/searchBar";
import React from "react";
//import Link from "next/link";

export default function Home() {
  const handleCitySearch = (city: string) => {
    console.log('You searched for:', city);
    //replace stuff here with actual api stuff
  };

  return (
    <div>
      <header className="pt-4">
        <h1 className="text-2xl font-bold text-center">ClearSky</h1>
      </header>
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <SearchBar onSearch={handleCitySearch} />
      </main>
    </div>
  );
}
