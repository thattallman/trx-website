import RenderRoutes from "./routes/RenderRoutes";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Navbar from "./componments/headers/Navbar";
import MobileHeader from "./componments/headers/MobileHeader";
import HomePage from './pages/landing/Home'
import  ClientPage from "./pages/landing/Client";
 import CandidatePage  from "./pages/landing/Candidates";
 



function App() {
  return (
    <BrowserRouter>
      {/* <RenderRoutes /> */}
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/client" element={<ClientPage />} />
      <Route path="/candidates" element={<CandidatePage />} />
      </Routes>

      <Navbar />
      <MobileHeader />
    </BrowserRouter>
  );
}

export default App;
