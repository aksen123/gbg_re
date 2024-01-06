import Link from "next/link"

export default function Footer(){
  return (
    <footer className="w-screen flex flex-col justify-center items-center">
      <ul className="flex gap-normal">
        <li><img className="h-16" src="/images/05_footerLogo(1).png" alt="관리소 로고" /></li>
        <li><img className="h-16" src="/images/05_footerLogo(2).png" alt="문화재청 로고" /></li>
        <li><img className="h-16" src="/images/05_footerLogo(3).png" alt="서울시 로고" /></li>
      </ul>
      <address>
        <p>서울특별시 종로구 사직로 161</p>
        <p>전화번호(02) 3700-3900</p>
        <p>팩스(02) 3700-3909</p>
      </address>
    </footer>
  )
}