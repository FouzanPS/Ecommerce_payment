import axios from "axios";

const ProductCard = ({ product }) => {
  const handleBuyNow = async () => {
    try {
      // Send a POST request to the /pay endpoint on your server
      const response = await axios.post("http://localhost:3000/pay", {
        product: product.name,
        price: product.price,
      });

      // Redirect user to PayPal approval link
      if (response.data.approvalLink) {
        window.location.href = response.data.approvalLink;
      } else {
        alert("Failed to create PayPal order.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("There was an issue initiating the payment. Please try again.");
    }
  };

  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.name}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="mt-2 text-gray-600 flex-grow">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-xl font-bold text-gray-800">
            ${product.price}
          </span>
          <button
            className="px-3 py-1 bg-black text-white rounded-lg text-sm font-medium hover:bg-white hover:border-black hover:border-2 hover:text-black"
            onClick={handleBuyNow}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
