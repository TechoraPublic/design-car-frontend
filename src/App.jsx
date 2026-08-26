import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/footer";
import BackgroundVideo from "./components/BackgroundVideo";

function App() {
  return (
    <BrowserRouter>
      <BackgroundVideo />

      <div className="relative z-10">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;