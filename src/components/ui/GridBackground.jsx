// import { cn } from "@/lib/utils";
// import React from "react";

// export function GridBackgroundDemo() {
//   return (
//     <div
//       className="relative flex h-[50rem] w-full items-center justify-center bg-white">
//       <div
//         className={cn(
//           "absolute inset-0",
//           "[background-size:40px_40px]",
//           "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          
//         )} />
//       {/* Radial gradient for the container to give a faded look */}
//       <div
//         className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
        
//         {/* <div className="flex flex-col items-center justify-center bg-red-100">

        
//       <p
//         className=" z-20 bg-gradient-to-b from-red-200 to-pink-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
//         Evermore
//       </p>
//       <p
//         className=" z-20 bg-gradient-to-b from-red-200 to-pink-500 bg-clip-text py-8 text-2xl font-bold text-transparent sm:text-4xl">
//         Share your moments with others
//       </p>
//       </div> */}
//     </div>
//   );
// }

import { cn } from "@/lib/utils";
import React from "react";
import Button from "./selfmades/Button";
import Link from "next/link";

export function GridBackgroundDemo() {
  return (
    <div
      className="relative flex h-[50rem] w-full items-center justify-center bg-white">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#fce7f3_1px,transparent_1px),linear-gradient(to_bottom,#fce7f3_1px,transparent_1px)]",
        )} 
      />
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
        <div className="z-10 flex flex-col items-start justify-center bg-red-10 px-2 py-4">
            <h1 className="text-6xl sm:text-8xl font-bold text-pink-500">Evermore</h1>
        <p className="text-center text-sm">Let others share there moments</p>
        <Link href={'/create-new'}>
        <Button text="Book Wedding Date" className="bg-pink-400 hover:bg-pink-500 transition-colors duration-500 text-white px-4 py-2" />
</Link>
        </div>
    </div>
  );
}

