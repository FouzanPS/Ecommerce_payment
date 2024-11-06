import "./App.css";
import Navbar from "./components/Navbar";
import OrderCancellation from "./components/OrderCancellation";
import OrderConfirmation from "./components/OrderConfirmation";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <>
      <Navbar />
      <ProductList />
    </>
  );
}
