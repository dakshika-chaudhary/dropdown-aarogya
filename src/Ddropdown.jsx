import { useState } from "react";
import{ AiOutlineCaretUp,AiOutlineCaretDown } from"react-icons/ai";
import list from "./list.json";


// import React from 'react'

function Ddropdown() {

    const [isOpen,setIsOpen]=useState(false);
  return (
    <div className="relative flex flex-col items-center w-[900px] h-[900px] rounded-e">
        <button 
        onClick={()=>setIsOpen((prev) => !prev)}
        className="bg-blue-500 p-4 w-full flex item-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white">
            Check-Timings
            
            {!isOpen ? (
                <AiOutlineCaretDown className="h-8"/>):(<AiOutlineCaretUp className="h-8"/>

            )}
            </button>


{isOpen && (
    <div className="bg-gray-100 absolute top-20 flex flex-col item-startroundeed-lg p-2 w-full rounded-e">
    {list.map((item,i)=>(
        <div className="flex w-full border-gray p-2 mt-1 mb-1 hover:bg-gray-200">
            <h3 className="ml-20 ">{item.schedule}</h3>
            <h3 className="ml-60 ">{item.time}</h3>
            
            </div>
    )

    )}
    </div>
)}
      
    </div>
    
  );
}



export default Ddropdown