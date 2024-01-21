"use client";

import Image from "next/image";
import { dayEvent, nightEvent, EventType } from "@/app/data/event";
import { useEffect, useState, useRef } from "react";

interface CardType extends EventType {
  width: number;
}

const EventSlide = () => {
  const [cardWidth, setCardWidth] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const events: EventType[] = [
    ...dayEvent,
    ...nightEvent,
    ...dayEvent,
    ...nightEvent,
    ...dayEvent,
    ...nightEvent,
  ];
  const slideSetting = () => {
    const slide = document.querySelector(".event")?.clientWidth;
    const itemWidth =
      window.innerWidth > 1024
        ? ((slide as number) - 40 * 2) / 3
        : window.innerWidth > 768
        ? ((slide as number) - 40) / 2
        : (slide as number) - 20;
    const wrapperWidth = (itemWidth + 30) * events.length;
    setCardWidth(itemWidth);
    setSlideWidth(wrapperWidth);
    setTranslate(((itemWidth + 30) * events.length) / 3);
  };
  useEffect(() => {
    slideSetting();
    window.addEventListener("resize", slideSetting);

    return () => window.removeEventListener("resize", slideSetting);
  }, []);

  const moveSlide = (e: React.MouseEvent<HTMLButtonElement>, num: number) => {
    e.preventDefault();
    let maxCount = events.length / 3;
    let idx = slideIndex + num;
    let left = idx * (cardWidth + 30);

    setSlideIndex(idx);
    slideRef.current?.style.setProperty("left", `${left}px`);

    if (Math.abs(idx) == Math.abs(maxCount)) {
      setTimeout(() => {
        slideRef.current?.classList.remove("duration-500");
        slideRef.current?.style.setProperty("left", `0px`);
        setSlideIndex(0);
      }, 500);
      setTimeout(() => {
        slideRef.current?.classList.add("duration-500");
      }, 600);
    }
  };

  return (
    <div className="w-full">
      <div className="event w-full max-w-[1200px] mt-16 py-4 px-4 overflow-hidden">
        <div
          className={`flex justify-start relative top-0 left-0 duration-500`}
          style={{
            width: `${slideWidth}px`,
            transform: `translateX(-${translate}px)`,
          }}
          ref={slideRef}
        >
          {events.map((el, i) => (
            <Card key={el.date + i} width={cardWidth} {...el} />
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center gap-48 mt-12">
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            moveSlide(e, 1);
          }}
          className="block text-4xl border-2 border-black p-3 "
        >
          ◀
        </button>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            moveSlide(e, -1);
          }}
          className="block text-4xl border-2 border-black p-3"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

const Card = ({ src, title, desc, date, width }: CardType) => {
  return (
    <div
      className={
        " flex flex-col items-center justify-start gap-10 mr-[30px] pb-10  shadow-event-card rounded-3xl overflow-hidden"
      }
      style={{ width: `${width}px` }}
    >
      <Image
        src={src}
        alt="event image"
        width={1000}
        height={1000}
        className="w-full"
      />
      <h3 className="w-3/4 text-4xl font-semibold truncate">{title}</h3>
      <p className="w-3/4 text-2xl line-clamp-3">{desc}</p>
      <span className="w-3/4">{date}</span>
      <button className="bg-main-color block w-3/4 p-4 text-white">
        더보기
      </button>
    </div>
  );
};

export default EventSlide;
