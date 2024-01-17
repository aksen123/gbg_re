import Title from "./Title";
import Calendar from "./Calendar";
const EventCalendar = () => {
  return (
    <article className="w-full max-w-[1200px] my-0 mx-auto flex flex-col justify-center items-center px-10">
      <Title
        title="이달의 행사"
        intro="타임라인을 좌우로 움직이거나 스크롤해 이달의 축제와 행사를 경험해보세요!"
        bg="/images/title2.png"
      />
      <Calendar />
    </article>
  );
};

export default EventCalendar;
