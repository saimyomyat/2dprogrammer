import React from 'react'
import { FaRegThumbsUp } from "react-icons/fa";


const Header = () => {
  return (
    <div className=' rounded-xl  bg-gradient-to-b from-yellow-900 to-black  mt-5 px-5 py-2 flex justify-between w-[80%] md:w-[400px] items-center mx-auto '>
      <div className=' bg-gradient-to-b from-yellow-600 to-black px-8 py-4 rounded rounded-br-full font-bold text-yellow-500 text-xl md:text-2xl' >2D Guess Program</div>
      <div className='  '>
        
        
        <FaRegThumbsUp className='text-5xl text-yellow-600  animate-bounce '/>

        
        </div>
    </div>
  )
}

export default Header




















// import React from 'react';

// const GuessProgram = () => {
    // return (
    //     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
    //         <h1 className="text-3xl font-bold mb-6">2D Guess Program</h1>
    //         <div className="grid grid-cols-4 gap-4">
    //             {Array.from({ length: 16 }).map((_, index) => (
    //                 <div
    //                     key={index}
    //                     className="w-20 h-20 flex items-center justify-center bg-white/10 rounded-lg shadow-md hover:bg-white/30 hover:scale-105 transition transform duration-300"
    //                 >
    //                     {/* Add interactivity here if needed */}
    //                 </div>
    //             ))}
    //         </div>
    //         <div className="absolute bottom-4 text-center text-sm opacity-80">
    //             Inspired by Astrology ✨
    //         </div>
    //     </div>
    // );
// };

// export default GuessProgram;



// function generatePairsAndReverse(number) {
//   const numStr = number.toString();
//   const pairs = [];
//   const reversedPairs = [];

//   // Generate all possible 2-digit pairs
//   for (let i = 0; i < numStr.length; i++) {
//       for (let j = i + 1; j < numStr.length; j++) {
//           const pair = numStr[i] + numStr[j];
//           pairs.push(pair);

//           // Reverse the pair
//           const reversedPair = pair.split('').reverse().join('');
//           reversedPairs.push(reversedPair);
//       }
//   }

//   return { pairs, reversedPairs };
// }

// // Test the function
// const inputNumber = 3619;
// const { pairs, reversedPairs } = generatePairsAndReverse(inputNumber);

// console.log("Original Pairs:", pairs);       // ["36", "31", "39", "61", "69", "19"]
// console.log("Reversed Pairs:", reversedPairs); // ["63", "13", "93", "16", "96", "91"]
