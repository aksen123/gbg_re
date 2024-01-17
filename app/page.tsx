
import Image from 'next/image'
import MainSlide from './Components/main/MainSlide';
import MainBanner from './Components/main/MainBanner';
import EventCalendar from './Components/main/EventCalendar';
export default function Home() {

  return (
    <main className='flex flex-col gap-80'>
      <MainSlide />
      <MainBanner />
      <EventCalendar />
    </main>
  );
}
