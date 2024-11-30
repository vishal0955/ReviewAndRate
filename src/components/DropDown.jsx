import React, { useState } from 'react';

const Dropdown = () => {
  // State to toggle dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  

  return (
     
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Option 1
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Option 2
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Option 3
            </a>
          </div>
        </div>
      )
    
}

export default Dropdown;
