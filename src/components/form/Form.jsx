import './form.scss'

const Form = () => {
  return (
    <section className='form'>

      <div className='div'>

        <div className="text_group">
          <h4>
            We solve digital problems with an outstanding creative flare
          </h4>
          <p>
            We have created a new product that will help designers,
            developers and companies create websites for their
            startups quickly and easily.
          </p>
        </div>

        <div className="form_group">
          <form >
            
              <div className="tabs">
                <input type="radio" name="auth" id="signup" checked />
                <label htmlFor='signup' className="sign_up">sign up</label>
                <input type="radio" name="auth" id="login" />
                <label htmlFor='login' className="login">login</label>
              </div>

              <div className="sign_up_content">

                <div className="input1">
                  <input type="text" placeholder='Your email' />
                  <input type="text" placeholder='Your password' />
                </div>

                <div className="btn1">
                  <button>Create an Account</button>
                  <span>
                    <hr /> or <hr />
                  </span>
                  <button>Login via Twitter</button>
                </div>
                
              </div>

              <div className="login_content"></div>
           
          </form>
        </div>
        
      </div>

    </section>
  )
}

export default Form