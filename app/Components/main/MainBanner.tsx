import Title from "./Title"
import Link from "next/link"
import Image from "next/image"

const MainBanner
 = () => {
  return (
    <article className="w-screen max-w-[1200px] my-0 mx-auto flex flex-col justify-center items-center px-10">
      <Title title='경복궁 행사' intro='아름다운 경복궁을 시간대 별로 즐겨보세요!' bg="/images/title1.png"/>

      <div className="relative w-full flex flex-col items-center mt-28 md:flex-row before:absolute before:bg-day before:bg-cover before:w-80 before:h-80 before:-top-32 before:-left-72 after:absolute after:bg-night after:bg-cover after:w-80 after:h-80 after:-bottom-32 after:-right-80">
    
        <div className="w-full h-[400px] text-center pt-12 text-[#355B49] relative bg-[#F5EAD7] md:w-1/2 md:h-[600px] lg:h-[700px] md:pt-36">
          <Image src={'/images/02_gbgEvent_day.png'} alt="경복궁 이미지" width={1000} height={500} className="absolute h-full left-0 bottom-0 min-[300px]:max-md:hidden"/>
          <Image src={'/images/02_gbgEvent_day_mo.png'} alt="경복궁 이미지" width={1000} height={500} className="absolute h-full left-0 bottom-0 md:hidden"/>

          <h3 className="font-bold max-w-fit mx-auto z-10 text-5xl relative before:absolute before:bg-sun before:bg-cover before:w-20 before:h-20 before:-top-10 before:-left-10 before:-z-[1]">낮의 경복궁</h3>
          <p className="font-semibold mt-10 mb-12">해와 함께 떠오르는 <br /> 찬란한 조선의 역사와 문화</p>
          <Link href={'/information'} className="block font-semibold w-60 p-4 my-0 mx-auto border-2 border-[#355B49] rounded-full duration-500 hover:bg-[#355B49] hover:text-white relative">더 보기 →</Link>
        </div>

        <div className="w-full h-[400px] text-center pt-12 text-white relative bg-[#35436C] md:w-1/2 md:h-[600px] lg:h-[700px] md:pt-36">
          <Image src={'/images/02_gbgEvent_night.png'} alt="경복궁 이미지" width={1000} height={500} className="absolute h-full left-0 bottom-0 min-[300px]:max-md:hidden"/>
          <Image src={'/images/02_gbgEvent_night_mo.png'} alt="경복궁 이미지" width={1000} height={500} className="absolute h-full left-0 bottom-0 md:hidden"/>

          <h3 className="font-bold max-w-fit mx-auto z-10 text-5xl relative before:absolute before:bg-moon before:bg-cover before:w-20 before:h-20 before:-top-10 before:-right-10 before:-z-[1]">밤의 경복궁</h3>
          <p className="font-semibold mt-10 mb-12">달과 함께 떠오르는 <br /> 아름다운 조선의 야경과 풍류</p>
          <Link href={'/information'} className="block font-semibold w-60 p-4 my-0 mx-auto border-2 border-white rounded-full duration-500 hover:bg-white hover:text-[#35436C] relative">더 보기 →</Link>
        </div>

      </div>
    </article>
  )
}

export default MainBanner

