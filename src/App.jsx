import RenderRoutes from "./routes/RenderRoutes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./componments/headers/Navbar";
import MobileHeader from "./componments/headers/MobileHeader";


function App() {
  return (
    <BrowserRouter>
   

      <RenderRoutes />
      <Navbar />
      <MobileHeader />
    </BrowserRouter>
  );
}

export default App;
