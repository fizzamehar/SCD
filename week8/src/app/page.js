import MyCard from "@/components/MyCard";
import React from "react";

async function HomePage() {
  const res = await fetch("https://dummyjson.com/recipes");
  const response = await res.json();

  return (
    <div className=" bg-gray-300 grid grid-cols-3 gap-5">
      {response.recipes.map((i) => {
        return <MyCard key={i.id} id={i.id} image={i.image} name={i.name} />;
      })}
    </div>
  );
}

export default HomePage;