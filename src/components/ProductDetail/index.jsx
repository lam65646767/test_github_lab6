import React from 'react'
import { useLocation } from "react-router-dom";
export default function ProductDetail() {
  const location = useLocation();
  const {product} = location.state ||{};

  return(
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center">Chi Tiết Sản Phẩm</h2>
      <div className="">
        <div  className="bg-white shadow-lg p-4 rounded-lg">
          <img src={product.productImg} alt="" className='w-80 object-cover rounded-tl-lg'/>
          <p className='text-lg font-semibold mt-5'>{product.productName}</p>
          <p>Giá: {product.price} vnđ</p>
          <button className='w-full py-1 px-3 bg-blue-500 mt-5 text-white'>Thêm Sản Phẩm</button>
        </div>
        </div>
    </section>
)
  
}
