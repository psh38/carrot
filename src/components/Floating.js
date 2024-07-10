import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Floating() {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleList = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    
    <aside className={`quick ${isListVisible ? 'active' : ''}`}>
      {isListVisible && (
        <ul className="plus-list">
          <li className="box">
            <div>
              <Link to="/write-work" className="btn-work">알바</Link>
            </div>
            <div>
              <Link to="/write-real-estate" className="btn-real-estate">부동산</Link>
            </div>
            <div>
              <Link to="/write-car" className="btn-car">중고차</Link>
            </div>
          </li>
          <li className="box">
            <div>
              <Link to="/write-sell" className="btn-sell">내물건팔기</Link>
            </div>
          </li>
        </ul>
      )}
      <button type="button" 
      className="btn-plus" 
      onClick={toggleList}>
        글쓰기
      </button>
    </aside>
  )
}

export default Floating;