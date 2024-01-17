"use client";

import { useState } from "react";
import Link from "next/link";
const Calendar = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  return (
    <div className="w-full max-w-[1200px]">
      <div className="w-full h-40 border border-main-color rounded-full overflow-hidden flex justify-start items-center">
        <div className="relative w-1/4 h-full bg-main-color text-center text-white">
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-semibold">
            이달의 일정
          </span>
        </div>
        <div className="flex justify-between items-center gap-1 px-2">
          <button>{"<"}</button>
          <div>
            <p className="font-semibold text-main-color text-center">{month}</p>
            <p>{year}</p>
          </div>
          <button>{">"}</button>
        </div>
        <div className="grow flex justify-between">
          {changeCalendar(year, month).map((day, i) => (
            <Link
              href="#"
              key={i}
              className={
                "font-medium text-small-text " +
                `${
                  i % 7 === 0
                    ? "text-red-600"
                    : i % 7 === 6
                    ? "text-blue-600"
                    : ""
                }`
              }
            >
              {day}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const changeCalendar = (year: number, month: number) => {
  let month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month == 2 && checkLeapYear(year)) month_day[0] = 29;
  let calendar_arr = [];
  let first_day = new Date(`${year}-${month}`).getDay();
  for (let i = 0; i < first_day; i++) {
    calendar_arr.push("");
  }
  for (let i = 1; i <= month_day[month - 1]; i++) {
    calendar_arr.push(i);
  }
  let blank = 7 - (calendar_arr.length % 7);

  if (blank < 7) {
    for (let i = 0; i < blank; i++) {
      calendar_arr.push("");
    }
  }

  return calendar_arr;
};

const checkLeapYear = (year: number) => {
  if (year % 400) return true;
  else if (year % 100) return false;
  else if (year % 4) return true;
  else return false;
};
export default Calendar;
