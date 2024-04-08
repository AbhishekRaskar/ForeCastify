import React from "react";
import { Routes, Route } from "react-router-dom";
import Today from "../Pages/Today";
import Forecast from "../Pages/Forecast";
import News from "../Pages/News";
import Stories from "../Pages/Stories";
import Space from "../Pages/Space";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Today />} />
      <Route path="/forecast" element={<Forecast />} />
      <Route path="/news" element={<News />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/space" element={<Space />} />
    </Routes>
  );
};

export default AllRoutes;
