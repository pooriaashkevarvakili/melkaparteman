
import React, { useState } from 'react';


const CreditCard = () => {
  const [state, setState] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  const handleInputFocus = (e) => {
    setState({ ...state, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return (


    <div
      class="w-64 h-40 bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-lg shadow-lg"
    >
      <div class="flex justify-between m-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="7" y1="15" x2="7.01" y2="15" />
          <line x1="11" y1="15" x2="13" y2="15" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="9.5" cy="9.5" r="5.5" fill="#fff" />
          <circle cx="14.5" cy="14.5" r="5.5" />
        </svg>
      </div>
      <div class="flex justify-center mt-4">
        <h1 class="text-gray-400 font-thin font-os">
          XXXX XXXX XXXX 1234
        </h1>
      </div>
      <div
        class="flex flex-col justfiy-end mt-4 p-4 text-gray-400 font-quick"
      >
        <p class="font-bold text-xs">12 / 17</p>
        <h4 class="uppercase tracking-wider font-semibold text-xs">
          Our customer
        </h4>
      </div>
    </div>




  );
};

export default CreditCard;