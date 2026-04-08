import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
};

export default App;
