import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "001",
    name: "Wireless Earbuds",
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1718254410/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/274976_aiqrnc.png?tr=w-640",
    description:
      "High-quality wireless earbuds with noise cancellation and long battery life.",
    price: 49.99,
  },
  {
    id: "002",
    name: "Smartphone Stand",
    image:
      "https://m.media-amazon.com/images/I/51FxGATpdZL._SY300_SX300_QL70_FMwebp_.jpg",
    description: "Adjustable smartphone stand compatible with all devices.",
    price: 15.99,
  },
  {
    id: "003",
    name: "Portable Charger",
    image:
      "https://m.media-amazon.com/images/I/41J2W8DASzS._SX300_SY300_QL70_FMwebp_.jpg",
    description: "10,000mAh portable charger with dual USB output.",
    price: 25.5,
  },
  {
    id: "004",
    name: "Bluetooth Speaker",
    image:
      "https://m.media-amazon.com/images/I/41xqrbyovFL._SX300_SY300_QL70_FMwebp_.jpg",
    description:
      "Compact Bluetooth speaker with powerful bass and long-lasting battery.",
    price: 34.75,
  },
  {
    id: "005",
    name: "Desk Lamp",
    image:
      "https://media.istockphoto.com/id/1385390286/photo/home-desk-at-night-with-copy-space.jpg?s=612x612&w=0&k=20&c=IHC2j3ScELGNXn_G2ATnbCrtzURomJeveH5U8-m4yKw=",
    description:
      "Energy-efficient desk lamp with adjustable brightness and color modes.",
    price: 29.99,
  },
  {
    id: "006",
    name: "Fitness Tracker",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/se-case-unselect-gallery-1-202409_GEO_IN?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1724735269437",
    description:
      "Waterproof fitness tracker with heart rate monitor and activity tracking.",
    price: 59.99,
  },
  {
    id: "007",
    name: "Laptop Cooling Pad",
    image:
      "https://techiestore.in/wp-content/uploads/2024/04/Techie-ArcticFlow-5-Fan-Laptop-Cooling-pad-2048x2048.png",
    description:
      "Portable laptop cooling pad with dual fans for enhanced cooling.",
    price: 19.99,
  },
  {
    id: "008",
    name: "Gaming Mouse",
    image:
      "https://media.istockphoto.com/id/1272531670/photo/concept-design-for-esports-cyber-sports-professional-game-mouse-on-hexagon-pattern-background.jpg?s=612x612&w=0&k=20&c=SQ_Jcajxbv7NLkuYuBVXYrRGS5cV8k2Ld7Gk7yjntn0=",
    description:
      "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
    price: 45.0,
  },
];

const ProductList = () => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
