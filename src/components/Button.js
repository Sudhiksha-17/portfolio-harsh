// components/Button.jsx
import React from 'react';

export const Button = ({ children, onClick }) => (
  <button onClick={onClick} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
    {children}
  </button>
);
