
import performanceImg from "public/performance.jpg"
import TextImg from "../../components/TextImg"


const Performance = () => {
  return (
    <div className="pl-5">
      <p className="mt-3 text-white">Performance</p>
      <TextImg imgData={performanceImg} title="Blazing performance" imgAlt="img_performance" />
    </div>
  )
}

export default Performance