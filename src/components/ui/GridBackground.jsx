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
    </div>
  );
}

