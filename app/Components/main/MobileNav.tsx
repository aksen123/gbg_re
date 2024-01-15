'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'


const MobileNav = () => {
  const [mobile,setMobile] = useState(false)
  
  const displayNav = () =>{
    const body = document.querySelector('body')
    setMobile(!mobile)
    !mobile ?
    body?.classList.add('overflow-y-hidden') 
    : body?.classList.remove('overflow-y-hidden') 
  }
  return (
    <>
    <div onClick={displayNav} className={'w-screen h-screen bg-black opacity-60 z-10 absolute left-0 top-[80px] '+`${mobile ? 'block' : 'hidden'}`}></div>
    <button onClick={displayNav} className='absolute right-10 block w-8 h-8 lg:hidden'>
      <span className={'absolute block w-full h-1 bg-black duration-500 top-0 '+`${mobile ? 'rotate-45 -translate-y-1/2 top-1/2' : ""}`}></span>
      <span className={'absolute block w-full h-1 bg-black duration-500 top-1/2 -translate-y-1/2 '+`${mobile ? 'opacity-0': 'opacity-100'}`}></span>
      <span className={'absolute block w-full h-1 bg-black duration-500 bottom-0 '+`${mobile ? '-rotate-45 translate-y-1/2 bottom-1/2' : ''}`}></span>
    </button>

    <ul className={'absolute z-40 top-[80px] right-0 bg-gray-100 h-[calc(100vh-120px)] lg:hidden  duration-500 py-10 flex flex-col gap-normal overflow-y-scroll '+`${mobile ? 'w-4/6 opacity-100' : 'w-0 opacity-0'}`}>
            <li className="relative px-10 pb-10 border-b-2">
            <Link
              className="text-mo-sub-desc font-semibold mb-4 block"
              href="/information"
            >
              이용정보
            </Link>
            <ul className="font-medium list-disc px-10">
              <li>
                <Link onClick={displayNav} href={"/information/story"}>
                  경복궁 이야기
                </Link>
              </li>
              <li>
                <Link onClick={displayNav} href={"/information/come"}>
                  오시는 길
                </Link>
              </li>
              <li>
                <Link onClick={displayNav} href={"/information/gbg-rule"}>
                  한복 규정
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative px-10 pb-10 border-b-2">
            <Link
              className="text-mo-sub-desc font-semibold mb-4 block"
              href="/event-info"
            >
              행사
            </Link>
            <ul className="font-medium list-disc px-10">
              <li>
                <Link onClick={displayNav} href={"/event-info?type=day"}>
                  낮의 경복궁
                </Link>
              </li>
              <li>
                <Link onClick={displayNav} href={"/event-info?type=night"}>
                  밤의 경복궁
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative px-10 pb-10 border-b-2">
            <Link
              className="text-mo-sub-desc font-semibold mb-4 block"
              href="/event-res"
            >
              예약
            </Link>
            <ul className="font-medium list-disc px-10">
              <li>
                <Link onClick={displayNav} href={"/event-res"}>
                  낮 행사 예약
                </Link>
              </li>
              <li>
                <Link onClick={displayNav} href={"/event-res"}>
                  밤 행사 예약
                </Link>
              </li>
              <li>
                <Link onClick={displayNav} href={"/event-res"}>
                  예약 확인
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative px-10 pb-10 border-b-2">
            <Link
              className="text-mo-sub-desc font-semibold mb-4 block"
              href="/package-res"
            >
              패키지 예약
            </Link>
            <ul className="font-medium list-disc px-10">
              <li>
                <Link onClick={displayNav} href={"/package-res"}>
                  패키지 예약
                </Link>
              </li>
              <li>
                <Link onClick={displayNav} href={"/package-res"}>
                  예약 확인
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative px-10 pb-10 ">
            <Link
              className="text-mo-sub-desc font-semibold mb-4 block"
              href="/notice"
            >
              공지사항
            </Link>
          </li>
    </ul>
    </>
  )
}

export default MobileNav
