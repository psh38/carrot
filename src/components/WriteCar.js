import React from 'react';

function WriteCar() {

  return (
    <>
    <h2>중고차 글쓰기</h2>
    <form>
      <div>
        <label>이름</label>
        <input type="text" placeholder="이름을 입력하세요"/>
      </div>
      <div>
        <label>내용</label>
        <textarea placeholder="내용을 입력하세요."></textarea>
      </div>
      <button type="submit">등록버튼</button>
    </form>
    </>
  );
}

export default WriteCar;