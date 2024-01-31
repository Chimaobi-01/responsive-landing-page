import './getstarted.scss'
import { FaPlay } from "react-icons/fa";

const Getstarted = () => {
  return (
    <section className='getstarted'>

      <div className="gscontainer">

        <div className="gstop">

          <h4>
            Easy to setup. <br />
            Easy to maintain
          </h4>

          <p>
            Bootstrap is a widely-used, sleek, intuitive and powerful front-end framework for faster and easier web development.
          </p>

        </div>

        <div className="gsbottom">

          <button><FaPlay /></button>
          <button>Get Started</button>

        </div>

      </div>
    </section>
  )
}

export default Getstarted