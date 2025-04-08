"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
// import {runPreloadLogic} from "/Scripts/Preload.js"; // adjust path as needed

export default function PreloadEffect() {
  const pathname = usePathname();

  useEffect(() => {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Optional: delay to ensure any async stuff finishes
          setTimeout(() => {
            document.body.classList.remove("preload");
            console.log("Preload removed");
          }, 200); // tweak delay as needed (e.g., 100–300ms)
        });
      });
  }, [pathname]); // run this logic every time the route changes

  return null;
}
