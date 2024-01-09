'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function Home() {
  const [isViewActive, setViewActive] = useState(false);

  const toggleView = () => {
    setViewActive(true);
  };
  const toggleView2 = () => {
    setViewActive(false);
  };

  return (
    <div className={`group ${isViewActive ? 'view' : ''}`}>
      {/* 부모 요소 */}
      <button onMouseOver={toggleView} className={`${isViewActive ? 'peer' : ""}`}>Toggle View</button>
      <div onMouseLeave={toggleView2} className={`hidden peer-first:block group-hover:block ${isViewActive ? 'block' : 'hidden'}`}>
        {/* 자식 요소의 내용 */}
        <p>This is the child content.</p>
      </div>
    </div>
  );
}
