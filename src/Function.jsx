import React from 'react'
import { useState } from 'react';
import LiveNumbers from './LiveNumbers';



const App = () => {
  // Winning numbers from the last 7 days
  const [sevenDaysWinner, setSevenDaysWinner] = useState([34, 77, 63, 23, 89, 56, 93]);

  // Generate an array of all 2-digit numbers (00 to 99)
  const allNumbers = Array.from({ length: 100 }, (_, i) => i).map(num => num.toString().padStart(2, '0'));


  //remain num without reverse pair and no brake

  const remainingNumbers = allNumbers.filter(num => !sevenDaysWinner.includes(parseInt(num)));
  console.log(remainingNumbers)

  // Helper function to calculate the last digit of the sum of digits
  const getLastDigitOfSum = (number) => {
    const sum = number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    return sum % 10;  // Get the last digit of the sum
  };

  // Create a list of last digits of sums from the 7 days' winning numbers
  const excludedDigits = sevenDaysWinner.map(winner => getLastDigitOfSum(winner));
  console.log(excludedDigits)

  // Filter out numbers where the last digit of the sum of their digits matches the excluded digits
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

// Filtered numbers after removing reversed pairs
const finalNumbers = removeReversedPairs(filteredNumbers);
console.log(finalNumbers)
const finalNumbersNoBrake = removeReversedPairs(remainingNumbers);

  // Function to filter in numbers starting with any digit in htake
  const filterByStartingDigit = (numbers, htake) => {
    return numbers.filter(num => htake.some(digit => num.startsWith(digit.toString())));
  };

   // Define the htake array (numbers that should be included if the number starts with them)
   const htake = [2, 9, 6];
// Final list of numbers after filtering in those starting with digits from htake
const finalFilteredNumbers = filterByStartingDigit(finalNumbers, htake);
const finalFilteredNumbersNoBrake = filterByStartingDigit(finalNumbersNoBrake, htake);



// State to track if the user has clicked the "Get Lucky Number" switch
const [getLucky, setGetLucky] = useState(false);

// Function to get a random lucky number from finalFilteredNumbers
  // Function to get 3 random lucky numbers from finalFilteredNumbers
  const getLuckyNumbers = () => {
    // To ensure 3 distinct lucky numbers are selected
    const randomNumbers = [];
    const numbersCopy = [...finalFilteredNumbers];
    
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * numbersCopy.length);
      randomNumbers.push(numbersCopy.splice(randomIndex, 1)[0]);  // Remove the selected number to avoid duplicates
    }

    return randomNumbers;
  };

// Display the lucky number if the switch is on
 // Display the lucky numbers if the switch is on
 const luckyNumbers = getLucky ? getLuckyNumbers() : [];




return (
  <div>



    
<h1>Filtered Numbers no brake</h1>
    <ul>
      {finalNumbers.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>

    <h1>final filtered numbers</h1>

    <ul>
      {finalFilteredNumbers.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>
    <h1>final filtered numbers no brake</h1>

    <ul>
      {finalFilteredNumbersNoBrake.map(num => (
        <li key={num}>{num}</li>
      ))}

      
    </ul>

    

    



    <h1>Filtered Numbers (Excluding Last 7 Days' Winners and Reversed Pairs)</h1>
    <ul>
      {finalNumbersNoBrake.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>




    <h1>get lucky number</h1>


     {/* Switch to toggle the lucky number */}
     <label>
        <input 
          type="checkbox" 
          checked={getLucky} 
          onChange={() => setGetLucky(!getLucky)} 
        />
        Get Lucky Numbers
      </label>

      {luckyNumbers.length > 0 && (
        <div>
          <h2>Your Lucky Numbers are:</h2>
          <ul>
            {luckyNumbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
      )}

      <LiveNumbers />

  </div>
);
};





export default App;