
interface Props {
  title : string;
  intro : string;
  bg : string
}

const Title = ({title, intro, bg} : Props) => {
  return (
    <>
    <h2 className={`relative text-mo-sub-title font-semibold text-mainText mb-2 lg:text-sub-title before:absolute before:inline-block before:-top-24 before:-left-48 before:bg-cover before:bg-${bg} before:w-44 before:h-44 lg:before:w-52 lg:before:h-52 lg:before:-top-32 lg:before:-left-56`}>{title}</h2>
    <p className="text-mo-sub-desc lg:text-sub-desc">{intro}</p>
    </>
  )
}

export default Title
