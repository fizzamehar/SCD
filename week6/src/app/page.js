"use client";
import React, { useState } from "react";

function Page() {
  const [value, setvalue] = useState(0);
  function Add() {
    // Check value cannot exceed 10 
    if (value < 10) {
      setvalue(value + 1);
    }
  }
  function Subtract() {
    // Check value cannot be less than 0
    if (value > 0) {
      setvalue(value - 1);
    }
  }

  return (
    <div className="bg-teal-200 min-h-screen text-black flex flex-col items-center justify-center ">
      <h1 className="font-bold text-5xl">Counter Program</h1>

      <h1 className="font-bold text-5xl ">{value}</h1>

      <div className="space-x-4 mt-6">
        <button
          onClick={Add}
          className="bg-blue-600 text-white py-2 px-6 rounded-md ">
          Add1
        </button>

        <button
          onClick={Subtract}
          className="bg-blue-600 text-white py-2 px-6 rounded-md">
          Subtract1
        </button>
      </div>
    </div>
  );
}

export default Page;
