import "./index.css"

const About = () => {
  return (
    <div className="contact">
      <div className="contact-top">
        <p className="para-top">contact us</p>
        <h1 className='head-top'>Get Helps & Friendly Support</h1>
      </div>
        <div className='container'>
          <form className='shadow'>
            <h1 className="head-to">Fillup The Form</h1> <br />
            <div className="input-two">
              <input type='text' placeholder='Name' className="input"/>
              <input type='text' placeholder='Email' className="input"/>
            </div>
            <input type='text' placeholder='Subject' className="subject"/>
            <textarea cols='30' rows='10' className="textarea"></textarea>
            <button type="button" className="button">Submit Request</button>
          </form>
        </div>
    </div>
  )
}

export default About
