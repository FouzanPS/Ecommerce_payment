import React from "react";
import Navbar from "./Navbar";

export default function OrderConfirmation() {
  return (
    <div>
      <Navbar />
      <h2 className="mt-12">
        <b>Order Confirmation</b>
      </h2>
      <p>
        Your order has been successfully placed. Thank you for shopping with us!
      </p>
    </div>
  );
}
