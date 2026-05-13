import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./component/header/header.jsx";
import Footer from "./component/footer/footer.jsx";

import Lh from "./pages/landingpage.jsx";
import AboutPage from "./pages/aboutpage.jsx";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Lh />
              <Footer />
            </>
          }
        />

        {/* ABOUT PAGE */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;