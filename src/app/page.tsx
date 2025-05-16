//import Image from "next/image";
'use client';
import SearchBar from "@/components/searchBar";
import Navbar from "@/components/navbar";
//import weatherCard from "@/components/weatherCard";
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
        <Navbar />
      </header>
      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        <SearchBar onSearch={handleCitySearch} />
      </main>
    </div>
  );
}
