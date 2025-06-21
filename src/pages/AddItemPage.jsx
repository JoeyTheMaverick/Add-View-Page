import React, { useState } from "react";
import { useItems } from "../ItemContext";
import { useNavigate } from "react-router-dom";

const ITEM_TYPES = ["Shirt", "Pant", "Shoes", "Sports Gear", "Other"];

export default function AddItemPage() {
  const [form, setForm] = useState({
    name: "",
    type: ITEM_TYPES[0],
    description: "",
    coverImage: null,
    additionalImages: []
  });
  const [success, setSuccess] = useState(false);
  const { addItem } = useItems();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === "coverImage") {
      setForm(f => ({ ...f, coverImage: files[0] }));
    } else if (name === "additionalImages") {
      setForm(f => ({ ...f, additionalImages: Array.from(files) }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.coverImage) return;
    addItem({
      ...form,
      id: Date.now(),
      coverImage: URL.createObjectURL(form.coverImage),
      additionalImages: form.additionalImages.map(f => URL.createObjectURL(f))
    });
    setForm({
      name: "",
      type: ITEM_TYPES[0],
      description: "",
      coverImage: null,
      additionalImages: []
    });
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate("/");
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/BG.jpg')" }}>
        <div className="max-w-lg w-full mx-auto p-8 bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-xl shadow-lg opacity-85">
            <h2 className="text-2xl font-bold mb-6 text-center">Add Item</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                <label className="block mb-1 font-medium">Item Name</label>
                <input
                    className="w-full rounded-xl px-3 py-2 shadow-md focus:outline-none focus:shadow-lg transition-shadow duration-200 bubble-up placeholder-gray-800"
                    name="name"
                    value={form.name}
                    required
                    onChange={handleChange}
                    placeholder="Enter item name"
                />
                </div>
                    <label className="block mb-1 font-medium">Item Type</label>
                    <div className="relative">
                        <select
                            className="
                            w-full
                            appearance-none
                            rounded-xl
                            px-4
                            py-3
                            bg-gradient-to-r from-blue-100 via-white to-blue-100
                            shadow-lg
                            text-gray-800
                            focus:outline-none
                            transition
                            duration-300
                            ease-in-out
                            hover:shadow-xl
                            bubble-up
                            pr-10
                            "
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                        >
                            {ITEM_TYPES.map(type => (
                            <option key={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                <div>
                <label className="block mb-1 font-medium">Description</label>
                <textarea
                    className="w-full rounded-xl px-3 py-2 shadow-md focus:outline-none focus:shadow-lg transition-shadow duration-200 bubble-up placeholder-gray-800"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Describe the item"
                />
                </div>
                <div>
                <label className="block mb-1 font-medium">Cover Image</label>
                <div className="flex items-center gap-2">
                    <label
                    htmlFor="coverImage"
                    className="
                        cursor-pointer
                        bg-gradient-to-r from-[#0b1436] via-[#361436] to-[#013f68]
                        text-white text-xs font-semibold
                        rounded-xl shadow-md
                        px-3 py-1
                        transition duration-300 ease-in-out
                        hover:-translate-y-0.5 hover:shadow-lg
                        focus:outline-none focus:ring-4 focus:ring-[#013f68]/40
                    "
                    >
                    Upload
                    </label>
                    <input
                    id="coverImage"
                    type="file"
                    accept="image/*"
                    name="coverImage"
                    required
                    onChange={handleChange}
                    className="hidden"
                    />
                    {form.coverImage && (
                    <span className="text-sm text-gray-600">{form.coverImage.name}</span>
                    )}
                </div>
                </div>

                <div>
                <label className="block mb-1 font-medium">Additional Images</label>
                <div className="flex items-center gap-2">
                    <label
                    htmlFor="additionalImages"
                    className="
                        cursor-pointer
                        bg-gradient-to-r from-[#0b1436] via-[#361436] to-[#013f68]
                        text-white text-xs font-semibold
                        rounded-xl shadow-md
                        px-3 py-1
                        transition duration-300 ease-in-out
                        hover:-translate-y-0.5 hover:shadow-lg
                        focus:outline-none focus:ring-4 focus:ring-[#013f68]/40
                    "
                    >
                    Upload
                    </label>
                    <input
                    id="additionalImages"
                    type="file"
                    accept="image/*"
                    name="additionalImages"
                    multiple
                    onChange={handleChange}
                    className="hidden"
                    />
                    {form.additionalImages && form.additionalImages.length > 0 && (
                    <span className="text-sm text-gray-600">
                        {form.additionalImages.length} file(s) selected
                    </span>
                    )}
                </div>
                </div>
                    <button
                    type="submit"
                    className="
                        w-full
                        py-3
                        bg-gradient-to-r from-[#0b1436] via-[#361436] to-[#013f68]
                        text-white
                        font-semibold
                        rounded-xl
                        shadow-2xl
                        hover:from-[#013f68] hover:via-[#361436] hover:to-[#0b1436]
                        focus:outline-none focus:ring-4 focus:ring-[#013f68]/40
                        transition
                        duration-500
                        ease-in-out
                        transform
                        hover:-translate-y-1
                        hover:shadow-[0_8px_32px_0_rgba(13,31,68,0.35)]
                        active:translate-y-0
                        active:shadow-xl
                    "
                    >
                    Add Item
                    </button>
                {success && (
                <div className="mt-4 text-green-600 text-center font-semibold">
                    Item successfully added
                </div>
                )}
            </form>
        </div>   
    </div>

  );
}
