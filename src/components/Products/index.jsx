import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      id: 1,
      productName: "Đồng hồ 1",
      productImg:
        "https://image.donghohaitrieu.com/wp-content/uploads/2023/09/37_D173TCM.jpg?_gl=1*1igli0i*_gcl_au*ODA3MTk2MzM2LjE3MjkzNDcyMjY.*FPAU*ODA3MTk2MzM2LjE3MjkzNDcyMjY.",
      price: 95500000,
    },
    {
      id: 2,
      productName: "Đồng hồ 2",
      productImg: "https://image.donghohaitrieu.com/wp-content/uploads/2023/09/NJ0153-82X.jpg?_gl=1*10bay1e*_gcl_au*ODA3MTk2MzM2LjE3MjkzNDcyMjY.*FPAU*ODA3MTk2MzM2LjE3MjkzNDcyMjY.",
      price: 120000000,
    },
    {
      id: 3,
      productName: "Đồng hồ 3",
      productImg:
        "https://image.donghohaitrieu.com/wp-content/uploads/2024/10/Longines-Spirit-Zulu-Time-L3.812.4.93.6.jpg?_gl=1*5u7a22*_gcl_aw*R0NMLjE3MjkzNDI1NDYuQ2owS0NRandzYzI0QmhEUEFSSXNBRlhxQUIwZlpUcDhOeVpCRXRERTB4Qm9od1BqaHFsaVJHd1lNamV2RnlDeVQxZTk3THNyd3o5RVFRNGFBcnlPRUFMd193Y0I.*_gcl_au*NzczMjE4NDQyLjE3MjkzNDE3NTM.*FPAU*NzczMjE4NDQyLjE3MjkzNDE3NTM.",
      price: 84824500,
    },
  ];

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center">Danh sách đồng hồ</h2>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg p-4 rounded-lg">
            <img
              src={product.productImg}
              alt={product.productName}
              className="w-full object-cover rounded-tl-lg"
            />
            <p className="text-lg font-semibold">{product.productName}</p>
            <p>
              Giá: {product.price.toLocaleString()}
              <sup>đ</sup>
            </p>

            <Link
              to={`/product-detail/${product.id}`}
              state={{ product }}
              className="w-full py-1 px-3 bg-green-500 text-white"
            >
              Chi tiết sản phẩm
            </Link>
            <button className="w-full py-1 px-3 bg-blue-500 text-white mt-2">
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}