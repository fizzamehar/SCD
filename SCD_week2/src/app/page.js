import React from 'react'
export default function Page() {
  return (
    <div className="m-0 bg-red-600 flex justify-center ">
      <div className="w-[900px] min-h-screen flex flex-col ">
        <div className="flex h-[150px] w-full">
          <div className="w-full">
            <img src="/img.jpg" alt="Header" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="bg-black py-[12px] px-[20px] flex gap-[50px]">
          <a href="#" className="text-white no-underline text-[14px] font-bold">Home</a>
          <a href="#" className="text-white no-underline text-[14px] font-bold">About Us</a>
          <a href="#" className="text-white no-underline text-[14px] font-bold">Products</a>
          <a href="#" className="text-white no-underline text-[14px] font-bold">Contact Us</a>
        </div>
        <div className="flex flex-grow">
          <div className="w-[300px] bg-green-600 text-white text-[14px] ">left</div> 
          <div className="w-[70%] bg-orange-500 text-white text-[14px] ">right</div>
        </div>
        <div className="bg-blue-700 text-white h-[80px]   ">Footer Section</div>
      </div>
    </div>
  )
}