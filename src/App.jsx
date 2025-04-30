import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./pages/main/main";
import NotFound from "./pages/404page/404";
import ScrollToTopButton from "./components/scrollTopBtn";
import ServicesAllPage from "./pages/services-all";
import ServicesPage from "./pages/services";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-16 h-16 border-t-4 border-[#71914B] border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/services" element={<ServicesAllPage />} />
            <Route path="/services/:id" element={<ServicesPage />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
          <ScrollToTopButton />
        </>
      )}
    </main>
  );
}

export default App;
