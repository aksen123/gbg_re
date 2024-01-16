import Image from "next/image";
interface Props {
  title : string;
  intro : string;
  bg : string
}

const Title = ({title, intro, bg} : Props) => {
  return (
    <>
    <h2 className={"relative text-mo-sub-title font-semibold text-mainText mb-2 lg:text-sub-title"}>
      {title}
      <Image src={bg} alt="타이틀 이미지" width={100} height={100} className={`absolute inline-block bg-${'title1'} -top-20 -left-40 bg-cover w-40 h-40 lg:w-52 lg:h-52 lg:-top-32 lg:-left-56`} />
      </h2>
    <p className="text-mo-sub-desc lg:text-sub-desc">{intro}</p>
    </>
  )
}

export default Title
