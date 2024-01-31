import './features.scss'
import { IoDiamondOutline } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa6";
import { FaCircle, FaRegCircle } from "react-icons/fa";



const Features = () => {
  return (
    <section className='features'>

      <div className="img">
        <img src="/feature-1.jpg" alt="" />
      </div>

      <div></div>

      <div></div>

      <div className="main_content">
        <div className="top">
          <h4>We Create Something New</h4>
          <p>
            We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
          </p>
        </div>
        <div className="bottom">
          <div className="left">
            <FaRegSquare className='icon' />
            <span>30 New feature pages</span>
            <p>
              Startup Framework contains components and complex blocks which can easily.
            </p>
          </div>
          <div className="right">
            <IoDiamondOutline className='icon' />
            <span>
              Useful Symbol Components
            </span>
            <p>
              Samples will show you the feeling on how to play around using the components.
            </p>
          </div>
        </div>
      </div>

      <div className="pagination">
        <FaCircle />
        <FaRegCircle />
        <FaRegCircle />
        <FaRegCircle />
        <FaRegCircle />
      </div>
      
    </section>
  )
}

export default Features