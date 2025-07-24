import React from 'react';

const sareeCategories = [
  { id: 1, name: "Silk" },
  { id: 2, name: "Banarasi" },
  { id: 3, name: "Cotton" },
  { id: 4, name: "Tussar" },
  { id: 5, name: "Kanjeevaram" },
  { id: 6, name: "Chiffon" },
  { id: 7, name: "Georgette" },
  { id: 8, name: "Organza" },
  { id: 9, name: "Linen" },
  { id: 10, name: "Crepe" },
];

export default function Sidebar({ isOpen }) {
  return (
    <aside
      className={`absolute left-0 top-0 bg-gray-900 text-white transition-all duration-300 z-[90]
      ${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}
      style={{ 
        height: "100%", // Allows sidebar to adjust with content
        overflowY: "auto", // Enables scrolling
        paddingTop: "80px",
        paddingBottom: "610px", // Prevents overlap with header
      }}
    >
      {isOpen && (
        <div className="p-6 h-full">
          <h2 className="text-xl font-bold mb-4">Saree Categories</h2>
          <ul className="space-y-2">
            {sareeCategories.map((category) => (
              <li key={category.id} className="py-2 px-4 rounded hover:bg-gray-700 cursor-pointer">
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
