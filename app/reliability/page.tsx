import reliabilityImg from "public/reliability.jpg"
import TextImg from "../../components/TextImg"


const Reliability = () => {
  return (
    <div className="pl-5" >
      <p className='mt-3 text-white '>page Reliability !</p>
      <TextImg imgData={reliabilityImg} title="Blazing Reliability" imgAlt="img_Reliability" />
    </div>
  )
}

export default Reliability