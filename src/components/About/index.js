import "./index.css"

const About = () => {
  return (
    <>
      <div className="about-top">
        <p className="para-top">About Us</p>
        <h1 className="head-top">About Us - Who We Are?</h1>
      </div>
      <div className="about">
        <div className="about-bottom">
          <div className="about-bottom-left">
            <h1 className="head-bottom">Our Agency Story</h1>
            <p className="para-bottom">Check out our company story and work process</p>
          </div>
            <p className="para-bottom">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
          </div>
        <div className="about-image">
            <img src='https://i.postimg.cc/9XY55tbj/friends-look-on-laptop-1.jpg' className="image" alt='family-pic'/>
        </div>
    </div>
    </>
  )
}

export default About
