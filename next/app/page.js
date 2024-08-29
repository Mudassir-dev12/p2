"use client";
import React, { useEffect } from "react";
import image from "./img.png";
import Shery from "sheryjs";
const Page = () => {
  useEffect(() => {
    // Initialize text animation
    Shery.textAnimate(".text", {
      style: 2,
      y: 10,
      delay: 0.1,
      duration: 2,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      multiplier: 0.1,
    });
    Shery.imageEffect(".img", {
      style: 4,
      debug: true,
    });
  }, []);

  return (
    <div>
      <h1 className="text text-green-400 text-4xl">hello world</h1>
      <div className="">
       <img className="img" src="https://images.unsplash.com/photo-1723844944367-9332e405fd6c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"/>
      </div>
    </div>
  );
};

export default Page;
