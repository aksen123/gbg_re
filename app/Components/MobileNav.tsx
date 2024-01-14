'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'


const MobileNav = () => {
  const [mobile,setMobile] = useState(false)
  
  const test = () =>{
    const body = document.querySelector('body')
    setMobile(mobile => mobile? false : true)
    body?.classList.add('overflow-y-hidden')
    console.log(body)
  }
  return (
    <ul className='absolute z-40 top-[80px] right-0 bg-gray-100 px-12 w-4/6 h-[calc(100vh-120px)]'>
      <button onClick={test}>test</button>
            <li className="relative">
            <Link
              className="text-mo-sub-desc font-medium"
              href="/information"
            >
              이용정보
            </Link>
            <ul className="font-medium list-disc">
              <li>
                <Link href={"/information/story"}>
                  경복궁 이야기
                </Link>
              </li>
              <li>
                <Link href={"/information/come"}>
                  오시는 길
                </Link>
              </li>
              <li>
                <Link href={"/information/gbg-rule"}>
                  한복 규정
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative">
            <Link
              className="text-mo-sub-desc font-medium"
              href="/event-info"
            >
              행사
            </Link>
            <ul className="font-medium list-disc">
              <li>
                <Link href={"/event-info?type=day"}>
                  낮의 경복궁
                </Link>
              </li>
              <li>
                <Link href={"/event-info?type=night"}>
                  밤의 경복궁
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative">
            <Link
              className="text-mo-sub-desc font-medium"
              href="/event-res"
            >
              예약
            </Link>
            <ul className="font-medium list-disc">
              <li>
                <Link href={"/event-res"}>
                  낮 행사 예약
                </Link>
              </li>
              <li>
                <Link href={"/event-res"}>
                  밤 행사 예약
                </Link>
              </li>
              <li>
                <Link href={"/event-res"}>
                  예약 확인
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative">
            <Link
              className="text-mo-sub-desc font-medium"
              href="/package-res"
            >
              패키지 예약
            </Link>
            <ul className="font-medium list-disc">
              <li>
                <Link href={"/package-res"}>
                  패키지 예약
                </Link>
              </li>
              <li>
                <Link href={"/package-res"}>
                  예약 확인
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative">
            <Link
              className="text-mo-sub-desc font-medium"
              href="/notice"
            >
              공지사항
            </Link>
          </li>
    </ul>
  )
}

export default MobileNav
