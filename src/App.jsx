import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddItemPage from "./pages/AddItemPage";
import ViewItemPage from "./pages/ViewItemPage";
import { ItemProvider } from "./ItemContext";

export default function App() {
  return (
    <ItemProvider>
      <BrowserRouter>
        <nav className="bg-blue-700 text-white py-5 shadow">
          <div className="container mx-auto flex justify-between items-center px-4">
            <Link className="text-2xl font-bold" to="/">Item Catalog</Link>
            <div className="space-x-4">
              <Link className="py-2 px-4 rounded hover:bg-blue-800" to="/">View Items</Link>
              <Link className="py-2 px-4 rounded hover:bg-blue-800" to="/add">Add Items</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<ViewItemPage />} />
          <Route path="/view" element={<ViewItemPage />} />
          <Route path="/add" element={<AddItemPage />} />
        </Routes>
      </BrowserRouter>
    </ItemProvider>
  );
}
