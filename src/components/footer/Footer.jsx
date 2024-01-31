import './footer.scss'
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <section className='footer'>

       <div className="footer_container">

        <nav className="topnav">

          <h3>Startup 3</h3>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>
              <span>
              <FaTwitter />
              <FaFacebookSquare />
              <FaInstagram />
              </span>
            </li>
          </ul>

        </nav>

        <hr />

        <nav className="bottomnav">

          <ul>
            <li>Tour</li>
            <li>Features</li>
            <li>Pricing Plans</li>
            <li>Our Works</li>
            <li>Brands</li>
            <li>Contacts</li>
          </ul>

          <span>© 2017 Designmodo. All rights reserved.</span>

        </nav>

       </div>

    </section>
  )
}

export default Footer