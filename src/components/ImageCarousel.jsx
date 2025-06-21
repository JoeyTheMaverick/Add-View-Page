import React, { useState } from "react";

export default function ImageCarousel({ images }) {
  const [idx, setIdx] = useState(0);
  if (!images || images.length === 0) return null;

  function prev() {
    setIdx(i => (i === 0 ? images.length - 1 : i - 1));
  }
  function next() {
    setIdx(i => (i === images.length - 1 ? 0 : i + 1));
  }

  return (
    <div className="relative w-full flex flex-col items-center ">
      <div className="relative w-full h-64 flex items-center justify-center">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className={`absolute left-1/2 top-1/2 w-64 h-64 object-cover rounded-xl shadow-lg transition-all duration-500
              ${i === idx ? "block carousel-fade -translate-x-1/2 -translate-y-1/2 opacity-100 z-10" : "hidden opacity-0"}
            `}
            draggable={false}
          />
        ))}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center items-center mt-4 space-x-3">
          <button
            onClick={prev}
            className="p-2 rounded-full bg-white/70 hover:bg-white/90 shadow transition"
            aria-label="Previous"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-sm text-gray-500 select-none">
            {idx + 1} / {images.length}
          </span>
          <button
            onClick={next}
            className="p-2 rounded-full bg-white/70 hover:bg-white/90 shadow transition"
            aria-label="Next"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      {images.length > 1 && (
        <div className="flex justify-center mt-2 space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 border
                ${i === idx ? "bg-[#013f68] border-[#013f68] scale-125" : "bg-gray-300 border-gray-400"}
              `}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
