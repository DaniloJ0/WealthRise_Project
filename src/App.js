import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Presentation from "./pages/presentacion/Presentation";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Presentation />}/>
      {/* <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<SacarCita />}/>
      <Route path="/registro" element={<SacarCita />}/> */}

      {/* Aqui vas a colocar las rutas a las pagibas, llamas al componente que hace referencia */}
      {/* <Route path="/sugerencias" element={<Ruta2/>}/> */}
      
    </Routes>
  </Router>
  );
}

export default App;
