"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [view, setView] = useState(false);

  const showSubmenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
  let ul = e.currentTarget.parentElement?.parentElement
  let list = ul?.querySelectorAll('.relative')
  console.log(list)
    list?.forEach(li => li.classList.remove('group'))
    e.currentTarget.parentElement?.classList.add("group");
    setView(true);
  };

  const hideSubmenu = (e: React.MouseEvent<HTMLHeadElement>) => {
    setView(false);
    let list = e.currentTarget.querySelectorAll(".list > li");
    list.forEach((li) => {
      li.classList.remove('group')
    });
  };

  return (
    <header
      onMouseLeave={hideSubmenu}
      className="relative w-screen h-[120px] flex flex-col items-center shadow-nav"
    >
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
      <ul className="list flex w-full max-w-[1200px] h-[80px] justify-start items-center gap-normal ">
        <li>
          <Link href="/">
            <img src="/images/05_footerLogo(1).png" alt="" />
          </Link>
        </li>
        <li className="relative">
          <Link
            onMouseOver={showSubmenu}
            className="text-mo-sub-desc font-medium relative before:absolute before:w-0 before:h-2 before:bg-main-color before:block before:bottom-0 before:opacity-80 before:duration-150 hover:before:w-full"
            href="/information"
          >
            이용정보
          </Link>
          <ul className="hidden group-even:flex gap-5 absolute w-screen h-[60px] -bottom-[105px] z-50 font-semibold+">
            <li>
            <Link href={'/information/story'} className="hover:text-main-color ease-in duration-150 font-medium">
              경복궁 이야기
            </Link>
            </li>
            <li>
            <Link href={'/information/come'} className="hover:text-main-color ease-in duration-150 font-medium">
              오시는 길
            </Link>
            </li>
            <li>
            <Link href={'/information/gbg-rule'} className="hover:text-main-color ease-in duration-150 font-medium">
              한복 규정
            </Link>
            </li>
          </ul>
        </li>
        <li className="relative">
          <Link
            onMouseOver={showSubmenu}
            className="text-mo-sub-desc font-medium relative before:absolute before:w-0 before:h-2 before:bg-main-color before:block before:bottom-0 before:opacity-80 before:duration-150 hover:before:w-full"
            href="/event-info"
          >
            행사
          </Link>
          <ul className="hidden group-odd:flex gap-5 absolute w-screen h-[60px] -bottom-[105px] z-50 font-semibold+">
            <li>
            <Link href={'/event-info?type=day'} className="hover:text-main-color ease-in duration-150 font-medium">
              낮의 경복궁
            </Link>
            </li>
            <li>
            <Link href={'/event-info?type=night'} className="hover:text-main-color ease-in duration-150 font-medium">
              밤의 경복궁
            </Link>
            </li>
          </ul>
        </li>
        <li className="relative">
          <Link
            onMouseOver={showSubmenu}
            className="text-mo-sub-desc font-medium relative before:absolute before:w-0 before:h-2 before:bg-main-color before:block before:bottom-0 before:opacity-80 before:duration-150 hover:before:w-full"
            href="/event-res"
          >
            예약
          </Link>
          <ul className="hidden group-even:flex gap-5 absolute w-screen h-[60px] -bottom-[105px] z-50 font-semibold+">
            <li>
            <Link href={'/event-res'} className="hover:text-main-color ease-in duration-150 font-medium">
              낮 행사 예약
            </Link>
            </li>
            <li>
            <Link href={'/event-res'} className="hover:text-main-color ease-in duration-150 font-medium">
              밤 행사 예약
            </Link>
            </li>
            <li>
            <Link href={'/event-res'} className="hover:text-main-color ease-in duration-150 font-medium">
              예약 확인
            </Link>
            </li>
          </ul>
        </li>
        <li className="relative">
          <Link
            onMouseOver={showSubmenu}
            className="text-mo-sub-desc font-medium relative before:absolute before:w-0 before:h-2 before:bg-main-color before:block before:bottom-0 before:opacity-80 before:duration-150 hover:before:w-full"
            href="/package-res"
          >
            패키지 예약
          </Link>
          <ul className="hidden group-odd:flex gap-5 absolute w-screen h-[60px] -bottom-[105px] z-50 font-semibold+">
            <li>
            <Link href={'/package-res'} className="hover:text-main-color ease-in duration-150 font-medium">
              패키지 예약 
            </Link>
            </li>
            <li>
            <Link href={'/package-res'} className="hover:text-main-color ease-in duration-150 font-medium">
              예약 확인
            </Link>
            </li>
          </ul>
        </li>
        <li className="relative">
          <Link
            onMouseOver={showSubmenu}
            className="text-mo-sub-desc font-medium relative before:absolute before:w-0 before:h-2 before:bg-main-color before:block before:bottom-0 before:opacity-80 before:duration-150 hover:before:w-full"
            href="/notice"
          >
            공지사항
          </Link>
        </li>
      </ul>
      {view ? (
        <div className="w-full h-[60px] absolute -bottom-[60px]">
          <img
            src="/images/00_nav_pattern.png"
            alt=""
            className="bg-main-color w-[20%] h-[100%]"
          />
        </div>
      ) : null}
    </header>
  );
}
