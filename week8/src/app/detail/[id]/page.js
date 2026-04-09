import React from "react";
import Link from "next/link";

// Params ko await karna zaroori hai Next.js 15+ mein
async function DetailPage({ params }) {
   params = await params;

  console.log(params.id);

  let res = await fetch("https://dummyjson.com/recipes/" + params.id);
  let response = await res.json();
  // console.log(response);

  return (
   <div className="bg-white min-h-screen p-6 font-sans text-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Image */}
        <img src={response.image} className="w-full h-80 object-cover rounded-xl mb-6" />

        {/* Title & Button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{response.name}</h1>
          <Link href="/">
            <button className="bg-green-500 text-white px-6 py-2 rounded-md">Go Back</button>
          </Link>
        </div>

        {/* Ingredients Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Ingredients</h2>
          <div className="flex flex-col gap-2">
            {/* Har item ke liye simple div - Yehi common tareeka hai */}
            {response.ingredients?.map((item, index) => (
              <div key={index} className="text-lg text-gray-700">
                • {item}
              </div>
            ))}
          </div>
        </div>

        {/* Instructions Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Instructions</h2>
          <div className="flex flex-col gap-4">
            {response.instructions?.map((step, index) => (
              <div key={index} className="text-lg text-gray-700 leading-relaxed">
                {index + 1}. {step}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default DetailPage;