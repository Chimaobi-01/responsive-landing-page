import Navbar from '../navbar/Navbar'
import './landingpage.scss'
import { FaCircle, FaRegCircle } from "react-icons/fa";


const Landingpage = () => {
    return (
        <section className='landingpage'>

            <Navbar />

            <div className="hero_content">

                <div className='container'>

                    <div className='text_group'>
                        <span>Startup 3</span>
                        <h1>Forget About Code</h1>
                        <p className='text'>
                            Startup Framework gives you complete freedom
                            over your creative process — you don’t have
                            to think about any technical aspects. There
                            are no limits and absolutely no coding.
                        </p>
                    </div>

                    <div className="pagination">
                        <FaCircle />
                        <FaRegCircle />
                        <FaRegCircle />
                        <FaRegCircle />
                        <FaRegCircle />
                    </div>

                    <div className="btn_group">
                        <button>Create an Account</button>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default Landingpage