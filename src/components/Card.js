// components/Card.jsx
import React from 'react';

export const Card = ({ children }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-md">{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="space-y-4">{children}</div>
);
