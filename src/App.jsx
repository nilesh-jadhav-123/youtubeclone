import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/searchResults/:searchQuery" element={<SearchResult />} />
          <Route path="/video/:id" element={<VideoDetails />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
