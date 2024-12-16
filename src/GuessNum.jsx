import React, { useState } from 'react'

const GuessNum = () => {

    //you have to change data here

  const [sevenDaysWinner, setSevenDaysWinner] = useState([42, 96,74, 67, 23, 89, 55,29]);

  const allNumbers = Array.from({ length: 100 }, (_, i) => i).map(num => num.toString().padStart(2, '0'));


  //remain num without reverse pair and no brake

  const remainingNumbers = allNumbers.filter(num => !sevenDaysWinner.includes(parseInt(num)));
  console.log(remainingNumbers)


  // Helper function to calculate the last digit of the sum of digits
  const getLastDigitOfSum = (number) => {
    const sum = number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    return sum % 10;  // Get the last digit of the sum
  };

  const excludedDigits = sevenDaysWinner.map(winner => getLastDigitOfSum(winner));
  console.log(excludedDigits)


  const filteredNumbers = allNumbers.filter(num => !excludedDigits.includes(getLastDigitOfSum(num)));
  console.log(filteredNumbers)

   // Function to remove reversed pairs from the list and keep the smaller number
 const removeReversedPairs = (numbers) => {
    const uniqueNumbers = new Set();  // To store unique numbers
    numbers.forEach(num => {
      const reversed = num.split('').reverse().join('');  // Reverse the number
      if (parseInt(num) < parseInt(reversed)) {
        uniqueNumbers.add(num);  // Add the smaller number (numerically) to the set
      } else {
        uniqueNumbers.add(reversed);  // Add the reversed number (if larger) to the set
      }
    });
    return Array.from(uniqueNumbers);  // Convert set back to array
  };



  //Filtered numbers after removing reversed pairs
const finalNumbers = removeReversedPairs(filteredNumbers);
console.log(finalNumbers)
const finalNumbersNoBrake = removeReversedPairs(remainingNumbers);
console.log(finalNumbersNoBrake)

//shoul define htake to filer


const filterByStartingDigit = (numbers, htake) => {
    return numbers.filter(num => htake.some(digit => num.startsWith(digit.toString())));
  };

   // Define the htake array (numbers that should be included if the number starts with them)
   const htake = [1, 3, 8, 4,];

//oooooooooooooooooooooooooooooooooooooooooooooooooo


const finalFilteredNumbers = filterByStartingDigit(finalNumbers, htake);
const finalFilteredNumbersNoBrake = filterByStartingDigit(finalNumbersNoBrake, htake);

console.log(finalFilteredNumbersNoBrake)


//oooooooooooooooooooooooooooooooooooooooooooooooooo

 // Function to compare two arrays
 const arraysAreEqual = (finalFilteredNumbersNoBrake, finalNumbers) => {
    // if (finalFilteredNumbersNoBrake.length !== finalNumbers.length) return false;
    for (let i = 0; i < finalFilteredNumbers.length; i++) {
      if (finalFilteredNumbersNoBrake[i] == finalNumbers[i]) return true;
    }
   
  };

    // oooooooooooooooooooooooooooooooooooooooooooooooo
    return (
        <div className=" shadow-2xl rounded-xl  w-[80%] md:w-[400px] items-center mx-auto flex flex-col   bg-gradient-to-b from-yellow-900 to-black text-white">
            <h1 className="text-1xl mb-2 text-yellow-600 font-bold mb-2 mt-2">ထွက်နိုင်ချေများသောနံပါတ်များ</h1>
            <div className="grid grid-cols-4 gap-4 mb-10">
                {/* {finalNumbers.map((_, index) => (
                    
                   
                ))} */}
                {
                    finalNumbers.map((num) => (
                      <div
                      key={num}
                      
                      className={`w-12 h-12 flex items-center  justify-center rounded-lg shadow-md hover:bg-white/30 hover:scale-105 transition transform duration-300 
  ${finalFilteredNumbers.includes(num) ? 'bg-red-500 animate-pulse' : ''}
 
                          `}
                      style={{
                        border: '2px solid',
                        borderImage: 'linear-gradient(to right, #ff7e5f, #feb47b)', // gradient border color
                        borderImageSlice: 1,
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // shadow effect
                        outline: '3px solid rgba(255, 255, 255, 0.3)', // outline effect
                      }}
                    >
                      {num}
                    </div>
                    ))
                }
            </div>
            {/* <div className="absolute bottom-4 text-center text-sm opacity-80">
                Inspired by Astrology ✨
            </div> */}
        </div>
    );
}

export default GuessNum
