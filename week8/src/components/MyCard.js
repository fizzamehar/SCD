import Link from "next/link";
import React from "react";

function MyCard({ id, image, name }) {
  return (
    <div className="bg-gray-200 flex items-center justify-center flex-col p-4 rounded-lg shadow">
      <img src={image} alt={name} className="h-[150px] w-[150px] rounded-full object-cover" />
      <Link href={`/detail/${id}`} className="mt-2 text-black font-bold">
        {name}
      </Link>
    </div>
  );
}

export default MyCard;