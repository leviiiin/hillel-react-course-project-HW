import "./styles/reset.css";
import "./styles/global.css";
import { Header } from "./components/index";
import {
  MenuPage,
  HomePage,
  LoginPage,
  NotFountPage,
  SignupPage,
  CartPage,
  OrderPage,
} from "./pages/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="*" element={<NotFountPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
