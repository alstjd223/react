// LaLiga.jsx
import React from 'react';

function LaLiga() {
  return (
    <div className="card">
      <h2>라리가</h2>
      <ul className="match-list">
        <li>
          <span>매치 1</span>
          <button className="button">상세보기</button>
        </li>
        <li>
          <span>매치 2</span>
          <button className="button">상세보기</button>
        </li>
        <li>
          <span>매치 3</span>
          <button className="button">상세보기</button>
        </li>
      </ul>
    </div>
  );
}

export default LaLiga;
