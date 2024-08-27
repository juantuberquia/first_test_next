import Image from "next/image"
import type { StaticImageData } from "next/image"

type PropsTextImg = {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

const TextImg = (props: PropsTextImg) => {
  return (
    <div className="h-screen">
      <div className="absolute -z-10 inset-0 ">
        <Image src={props.imgData} alt={props.title} fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900"></div>
      </div>
      <div >
        <h1 className="pt-48 flex justify-center items-center text-white text-6xl"> {props.title} </h1>
      </div>
    </div>
  )
}

export default TextImg
