import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Gallery, Home, Register, SharedLayouts } from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<SharedLayouts />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
