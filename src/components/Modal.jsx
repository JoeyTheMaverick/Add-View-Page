import React from "react";
import ImageCarousel from "./ImageCarousel";

export default function Modal({ item, open, onClose, onEnquire }) {
  if (!open || !item) return null;

  const allImages = [
    item.coverImage,
    ...(item.additionalImages || [])
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-xl shadow-2xl max-w-lg w-full p-6 relative animate-modal-pop">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-2 text-center">{item.name}</h2>
        <div className="text-gray-500 mb-2 text-center">{item.type}</div>
        <ImageCarousel images={allImages} />
        {item.description && (
          <div className="mt-4 text-gray-700 text-center">{item.description}</div>
        )}
        <button
          className="mt-6 w-full py-2 bg-gradient-to-r from-[#0b1436] via-[#361436] to-[#013f68] text-white rounded-xl hover:from-[#013f68] hover:to-[#0b1436] transition"
          onClick={() => onEnquire(item)}
        >
          Enquire
        </button>
      </div>
    </div>
  );
}
