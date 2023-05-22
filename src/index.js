import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/HomePage";
import NewEvent from "./pages/newEvent";
import Nopage from './pages/nopage'

// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (

    <BrowserRouter >
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="/newEvent" element={<NewEvent />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);