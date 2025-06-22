import { useState } from 'react';
import ImageCarousel from './ImageCarousel';

export default function ItemCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={item.coverImageUrl}
          alt={item.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
          <h2 className="w-full text-center text-2xl md:text-3xl font-extrabold text-white tracking-wide drop-shadow-lg pb-6 uppercase">
            {item.name}
          </h2>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto p-6 relative animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="mb-6">
              {item.additionalImages && item.additionalImages.length > 0 ? (
                <ImageCarousel images={item.additionalImages} />
              ) : (
                <p className="text-gray-500">No additional images available.</p>
              )}
            </div>

            {item.description && (
              <p className="text-gray-700 text-lg">{item.description}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
