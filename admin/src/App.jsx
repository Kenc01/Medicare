import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero.jsx";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function RequireAuth({ children }) {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null;
  if (!isSignedIn)
    return (
      <div className="min-h-screen font-mono flex justify-center bg-linear-to-b from-emerald-50 via-green-50  to-emerald-100 px-4">
        <div className="text-center">
          <p className="text-emerald-800 font-semibold text-lg sm:text-2xl mb-4 animate-fade-in">
            Please sign in to view this page.
          </p>

          <div className="flex justify-center">
            <Link></Link>
          </div>
        </div>
      </div>
    );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
    </Routes>
  );
};

export default App;
