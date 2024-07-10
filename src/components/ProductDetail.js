import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import prdData from '../json/prd.json';

function ProductDetail() {
  const { id } = useParams(); // URL에서 상품 ID를 가져옵니다.
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // ID를 이용해 상품 데이터를 찾습니다.
    const foundProduct = prdData.find(item => item.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <p className="price">{product.price.toLocaleString()}원</p>
        <div className="info-list">
          <p>{product.info1}</p>
          <p>{product.info2}</p>
        </div>
        <div className="interactions">
          <p>댓글: {product.comments}</p>
          <p>좋아요: {product.likes}</p>
        </div>
      </div>
      {/* 추가적인 상품 정보나 기능을 여기에 넣을 수 있습니다 */}
    </div>
  );
}

export default ProductDetail;