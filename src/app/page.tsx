//import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-3xl font-medium">Welcome To ClearSky</h1>
        <p className="text-lg">
          ClearSky is a weather app that provides accurate and up-to-date weather information for any location in the world. It is designed to be user-friendly and easy to navigate, making it accessible to everyone.
        </p>
        <h2 className="text-2xl font-medium">Currently being developed</h2>
      </main>
    </div>
  );
}
