import './contact.scss'
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiContactsBook2Line } from "react-icons/ri";
import { FaCheckSquare } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";



const Contact = () => {
  return (
    <section className='contact'>

      <div className="contact_container">

        <div className="contact_address">

          <div className="address_top">
            <h4>Let’s Keep in Touch</h4>
            <p>
              We have created a new product that will help designers, developers and companies create websites for their startups quickly and easily.
            </p>
          </div>

          <div className="address_bottom">

            <span className='phone'>
              <FaPhone />
              +234 903 956 1136
            </span>

            <span className='email'>
              <MdOutlineMailOutline />
              chimaobi01@gmail.com
            </span>

            <span className='address'>
              <RiContactsBook2Line />
              San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco, 230909
            </span>
            
          </div>

        </div>

        <div className="send_message">

          <div className="name_budget">

            <label htmlFor="">
              <span>YOUR NAME</span>
              <input type="text" placeholder='First name' />
            </label>

            <label htmlFor="">
              <span>BUDGET</span>
              <div className="select">
                <select name="" id="">
                  <option value="">$500</option>
                </select>
                <FaChevronDown />
              </div>
            </label>

          </div>

          <div className="email">

            <label htmlFor="">
              <span>INPUT FIELD</span>
              <input type="text" placeholder='name@mail.com' />
            </label>

          </div>

          <div className="textarea_sendbtn">

            <label htmlFor="">
              <span>YOUR MESSAGE</span>
              <textarea placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
            </label>

            <div className="btn_box">
              <span>
                {/* <img src="/greencheck.svg" alt="check" /> */}
                <input type="checkbox" name="" id="" />
                Send me a copy
              </span>
              <button>Send</button>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact

