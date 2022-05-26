import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/creatores/dashboard";
import DispatchersZone from "./pages/creatores/dispatchersZone";
import Marketplace from "./pages/creatores/marketplace";

import Sales from "./pages/creatores/sales";
import Transactions from "./pages/creatores/transactions";
import Videos from "./pages/creatores/videos/videos";
import Signup from "./pages/signup";
import Upload from "./pages/creatores/Videos/upload";
import Podcasts from "./pages/creatores/podcast";
import Orders from "./pages/creatores/orders";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/creatores/dashboard" element={<Dashboard />} />
        <Route path="/creatores/marketplace" element={<Marketplace />} />
        <Route path="/creatores/videos" element={<Videos />} />
        <Route path="/creatores/videos/upload" element={<Upload />} />
        <Route path="/creatores/sales" element={<Sales />} />
        <Route path="/creatores/transactions" element={<Transactions />} />
        <Route
          path="/creatores/dispatcherszone"
          element={<DispatchersZone />}
        />
        <Route path="/creatores/orders" element={<Orders />} />
        <Route path="/creatores/podcasts" element={<Podcasts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
