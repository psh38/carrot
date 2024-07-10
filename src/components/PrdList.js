import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PrdList() {
  const [prdData, setPrdData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // promise 체인방식

    // 콜백방식

    // async + await
    const fetchPrdData = async () => {
      try {
        const response = await fetch('/data/prd.json');
        console.log('aaa', response)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        setPrdData(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrdData();
  }, []);

  return (
    <ul className="prd-list">
      {prdData.map((product) => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`} className="block">
            <div className="img-area">
              <img src={product.image} alt={product.name}/>
            </div>
            <div className="content-area">
              <div className="tit">{product.name}</div>
              <div className="info-list">
                <span>{product.info1}</span>
                <span>{product.info2}</span>
              </div>
              <p className="price">{product.price.toLocaleString()}원</p>
            </div>
            <div className="num-list">
              <span>댓글 <em>{product.comments}</em></span>
              <span>좋아요 <em>{product.likes}</em></span>
            </div>
          </Link>
          <button type="button" className="btn-opt">옵션더보기</button>
        </li>
      ))}
    </ul>
  );
}

export default PrdList;