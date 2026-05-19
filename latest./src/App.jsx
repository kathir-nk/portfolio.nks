import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/header.jsx";
import Footer from "./component/footer/footer.jsx";
import Lh from "./pages/landingpage.jsx";
import AboutPage from "./pages/aboutpage.jsx";
import ResumePage from './component/about/resume.jsx';
import Workpage from './pages/workpage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<Workpage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;