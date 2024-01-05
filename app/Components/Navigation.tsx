import Link from "next/link"
import { useState } from "react"

export default function Navigation(){

  return (
    <header className="relative w-screen h-[120px] flex flex-col items-center shadow-nav">
    <div className="w-full flex justify-center shadow-nav">
    <ul className="flex w-full max-w-[1200px] h-[40px] justify-end items-center gap-5 ">
      <li>트윗</li>
      <li>인스타</li>
      <li>
        <select name="" id="">
          <option value="KOR">KOR</option>
          <option value="ENG">ENG</option>
          <option value="JAP">JAP</option>
          <option value="CHN">CHN</option>
        </select>
      </li>
    </ul>
    </div>
    <ul className="flex w-full max-w-[1200px] h-[80px] justify-start items-center gap-normal ">
      <li>
        <Link href='/'>
          <img src="/images/05_footerLogo(1).png" alt="" />
        </Link>
      </li>
      <li className="relative group">
        <Link className="peer text-mo-sub-desc font-medium" href='/information'>이용정보</Link>
        <ul className="block gap-5 absolute w-screen h-[60px] -bottom-[105px] z-50 font-semibold  group-hover:flex hover:flex ">
          <li className="hover:text-main-color ease-in duration-150">경복궁 오는길</li>
          <li className="hover:text-main-color ease-in duration-150">오시는 길</li>
          <li className="hover:text-main-color ease-in duration-150">한복 규정</li>
        </ul>
      </li>
      <li>
        <Link className="text-mo-sub-desc font-medium" href='/event-info'>행사</Link>
      </li>
      <li>
        <Link className="text-mo-sub-desc font-medium" href='/event-res'>예약</Link>
      </li>
      <li>
        <Link className="text-mo-sub-desc font-medium" href='/package-res'>패키지 예약</Link>
      </li>
      <li>
        <Link className="text-mo-sub-desc font-medium" href='/notice'>공지사항</Link>
      </li>
    </ul>
    {/* <div className="w-full h-[60px] bg-emerald-200 absolute -bottom-[60px]">
      <img src="/images/00_nav_pattern.png" alt="" className="bg-main-color w-[20%] h-[100%]"/>
    </div> */}
  </header>
  )
}