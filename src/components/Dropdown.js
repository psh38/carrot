// Dropdown.js
import React from 'react';

function Dropdown({ isOpen, onSelect, options }) {
  if (!isOpen) return null;

  return (
    <ul className="dropdown">
      {options.map((option) => (
        <li key={option}>
          <button type="button" onClick={() => onSelect(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;