import Link from "next/link"

export default function Footer(){
  return (
    <footer className="w-screen flex flex-col justify-center items-center text-[1.3rem] border-t border-gray-100 mt-72">
      <ul className="flex gap-normal mt-16">
        <li>
          <Link href='https://www.royalpalace.go.kr/'>
          <img className="h-16" src="/images/05_footerLogo(1).png" alt="관리소 로고" />
          </Link>
          </li>
        <li>
          <Link href='https://www.cha.go.kr/main.html'>
          <img className="h-16" src="/images/05_footerLogo(2).png" alt="문화재청 로고" />
          </Link>
          </li>
        <li>
          <Link href='https://www.seoul.go.kr/main/index.jsp'>
          <img className="h-16" src="/images/05_footerLogo(3).png" alt="서울시 로고" />
          </Link>
          </li>
      </ul>
      <address className="flex gap-12 mt-12 text-xl">
        <p>서울특별시 종로구 사직로 161</p>
        <p>전화번호(02) 3700-3900</p>
        <p>팩스(02) 3700-3909</p>
      </address>
      <p className="mt-6 font-semibold">COPYRIGHT 2024 BY GYEONGBOKGUNG. ALL RIGHTS RESERVED.</p>
      <p className="text-gray-200">
        본 페이지는 포트폴리오 용도로 만들어졌습니다.
        </p>
    </footer>
  )
}