import homeImg from "public/home.jpg"
import TextImg from "../components/TextImg"



const Home = () => {
  return (
    <div className="pl-5" >
      <p className='mt-3 text-white '>Home page!</p>
      <TextImg imgData={homeImg} title="Blazing Reliability" imgAlt="img_Reliability" />
    </div>
  )
}

export default Home