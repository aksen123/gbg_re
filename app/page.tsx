
import Image from 'next/image'
import MainSlide from './Components/main/MainSlide';
import DayNight from './Components/main/DayNight';

export default function Home() {

  return (
    <main className='flex flex-col gap-80'>
      <MainSlide />
      <DayNight />
    </main>
  );
}
