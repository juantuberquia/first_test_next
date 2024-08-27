
import scaleImg from "public/scale.jpg"
import TextImg from "../../components/TextImg"

const Scale = () => {
  return (
    <div className="px-5">
      <p className="text-white">scale</p>

      <TextImg imgData={scaleImg} title="Blazing scale" imgAlt="img_scale" />

    </div>
  )
}

export default Scale