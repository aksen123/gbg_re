"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
const MainSlide = () => {
  const slide = (num: number) => {
    let images = document.querySelectorAll(".slide img");
    images.forEach((img) => {
      img.classList.remove("opacity-100");
      img.classList.remove("opacity-0");
      img.classList.add("opacity-0");
    });
    images[num]?.classList.remove("opacity-0");
    images[num]?.classList.add("opacity-100");
    let index = (num + 1) % images.length;

    setTimeout(() => {
      slide(index);
    }, 5000);
  }
  useEffect(() => {
    slide(0);
  }, []);
  return (
    <section>
      <div className="slide relative w-full h-[70vh]">
        <Image
          src={"/images/mainImg(1).png"}
          alt="경복궁 이미지"
          width={1500}
          height={1000}
          className="opacity-100 duration-500 w-full h-full object-cover absolute"
        />
        <Image
          src={"/images/mainImg(2).jpg"}
          alt="경복궁 이미지"
          width={1500}
          height={1000}
          className="opacity-0 duration-500 w-full h-full object-cover absolute"
        />
        <Image
          src={"/images/mainImg(3).jpg"}
          alt="경복궁 이미지"
          width={1500}
          height={1000}
          className="opacity-0 duration-500 w-full h-full object-cover absolute"
        />
        <Image
          src={"/images/mainImg(4).jpg"}
          alt="경복궁 이미지"
          width={1500}
          height={1000}
          className="opacity-0 duration-500 w-full h-full object-cover absolute"
        />
      </div>
      <nav className="w-full flex justify-center shadow-nav">
        <ul className="w-full max-w-[1200px] grid grid-cols-3 gap-normal py-8 px-12  lg:grid-cols-6">
          <li>
            <Link
              className="flex flex-col items-center relative before:w-14 before:h-14 before:absolute before:rounded-full before:bg-main-color before:block before:z-50 before:-top-3 before:right-14 before:opacity-80 before:scale-0 before:duration-300 lg:hover:before:scale-100"
              href={"/package-res"}
            >
              <Image
                src={"/images/01_midNav(1).png"}
                alt="메인페이지 내비게이션"
                width={60}
                height={60}
                className="w-24 h-24 relative"
              />
              <p className="font-semibold mt-5 text-2xl text-center">패키지 예약</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center relative before:w-14 before:h-14 before:absolute before:rounded-full before:bg-main-color before:block before:z-50 before:-top-3 before:right-14 before:opacity-80 before:scale-0 before:duration-300 lg:hover:before:scale-100"
              href={"/event-res"}
            >
              <Image
                src={"/images/01_midNav(2).png"}
                alt="메인페이지 내비게이션"
                width={60}
                height={60}
                className="w-24 h-24 relative"
              />
              <p className="font-semibold mt-5 text-2xl text-center">낮 예약</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center relative before:w-14 before:h-14 before:absolute before:rounded-full before:bg-main-color before:block before:z-50 before:-top-3 before:right-14 before:opacity-80 before:scale-0 before:duration-300 lg:hover:before:scale-100"
              href={"/event-res"}
            >
              <Image
                src={"/images/01_midNav(3).png"}
                alt="메인페이지 내비게이션"
                width={60}
                height={60}
                className="w-24 h-24 relative"
              />
              <p className="font-semibold mt-5 text-2xl text-center">밤 예약</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center relative before:w-14 before:h-14 before:absolute before:rounded-full before:bg-main-color before:block before:z-50 before:-top-3 before:right-14 before:opacity-80 before:scale-0 before:duration-300 lg:hover:before:scale-100"
              href={"/event-res"}
            >
              <Image
                src={"/images/01_midNav(4).png"}
                alt="메인페이지 내비게이션"
                width={60}
                height={60}
                className="w-24 h-24 relative"
              />
              <p className="font-semibold mt-5 text-2xl text-center">예약 확인</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center relative before:w-14 before:h-14 before:absolute before:rounded-full before:bg-main-color before:block before:z-50 before:-top-3 before:right-14 before:opacity-80 before:scale-0 before:duration-300 lg:hover:before:scale-100"
              href={"/information/come"}
            >
              <Image
                src={"/images/01_midNav(5).png"}
                alt="메인페이지 내비게이션"
                width={60}
                height={60}
                className="w-24 h-24 relative"
              />
              <p className="font-semibold mt-5 text-2xl text-center">오시는 길</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex flex-col items-center relative before:w-14 before:h-14 before:absolute before:rounded-full before:bg-main-color before:block before:z-50 before:-top-3 before:right-14 before:opacity-80 before:scale-0 before:duration-300 lg:hover:before:scale-100"
              href={"/notice"}
            >
              <Image
                src={"/images/01_midNav(6).png"}
                alt="메인페이지 내비게이션"
                width={60}
                height={60}
                className="w-24 h-24 relative"
              />
              <p className="font-semibold mt-5 text-2xl text-center">공지사항</p>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default MainSlide;
