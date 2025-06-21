import React, { useState } from "react";
import { useItems } from "../ItemContext";
import Modal from "../components/Modal";

export default function ViewItemPage() {
  const { items } = useItems();
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  function handleCardClick(item) {
    setSelectedItem(item);
    setModalOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
    setSelectedItem(null);
  }

  function handleEnquire(item) {
    alert(`Enquiry sent for "${item.name}"!`);
  }

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/BG.jpg')" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items && items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="
                relative
                rounded-2xl
                overflow-hidden
                shadow-xl
                cursor-pointer
                transition-transform duration-300
                hover:-translate-y-2 hover:shadow-2xl
                bg-white
              "
            >
              <img
                src={item.coverImage}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <h2 className="w-full text-center text-2xl md:text-3xl font-extrabold text-white tracking-wide drop-shadow-lg pb-6 uppercase">
                  {item.name}
                </h2>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400">
            No items to display.
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        item={selectedItem}
        open={modalOpen}
        onClose={handleCloseModal}
        onEnquire={handleEnquire}
      />
    </div>
  );
}
