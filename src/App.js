import Login from "./components/login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Homepage";
import Personal from "./components/personalinfo/Personal";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Order from "./components/order/Order";
import OrderSuccess from "./components/order/OrderSuccess";
import ViewOrder from "./components/order/ViewOrder";
import MainEcommerce from "./components/mainEcommerce/MainEcommerce";
function App() {
   return (
      <div className="App">
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/view-order" element={<ViewOrder />} />
            <Route path="/main-ecommerce" element={<MainEcommerce />} />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
