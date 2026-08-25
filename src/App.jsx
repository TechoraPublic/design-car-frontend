import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;