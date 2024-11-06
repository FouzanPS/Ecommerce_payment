import React from "react";
import Navbar from "./Navbar";

export default function OrderCancellation() {
  return (
    <div>
      <Navbar />
      <h2 className="mt-12">
        <b>Order Cancelled</b>
      </h2>
      <p>
        Your order was cancelled. If you have questions, feel free to contact
        us.
      </p>
    </div>
  );
}
