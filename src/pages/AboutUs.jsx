import React, { useRef } from "react";
// import "./AboutUs.css";
import "./AboutUs2.css";
import UserImg from "../assets/dummy-man-570x570-1.webp";
import Footer from "../components/Footer";

function AboutUs() {
  //   const [opacity, setOpacity] = useState(0);

  return (
    <>
      <div className="aboutus-page">
        <div className="div1">
          <div className="design1"></div>
          <img src={UserImg} alt="" />
          <div className="owner-info">
            <p className="owner-name">John Doe</p>
            <p className="owner-role">Founder and CEO</p>
            <p className="owner-bio">
              With over a decade of experience in the UI/UX industry, John Doe
              is a visionary leader passionate about crafting exceptional
              digital experiences. Known for his innovative mindset and
              attention to detail, John has led the company to great success by
              delivering cutting-edge design solutions to clients worldwide. His
              expertise in user-centered design principles, creative
              problem-solving, and strategic thinking has earned him a
              reputation for creating intuitive and visually captivating
              interfaces. John is committed to staying at the forefront of
              industry trends and driving the growth of the UI/UX firm, while
              continuously fostering a collaborative and empowering work
              environment for his team.
            </p>
          </div>
          <div className="design2"></div>
        </div>
        <div className="div2">
          <div className="mission-div">
            <p className="title">Mission : </p>
            <div className="cards-container">
              <div className="card">
                <p className="card-title">
                  Empowering Exceptional User Experiences:
                </p>
                <p className="card-content">
                  At UIUX, our mission is to empower exceptional user
                  experiences through innovative UI/UX design solutions. We are
                  dedicated to creating intuitive, visually captivating
                  interfaces that engage users and drive meaningful results for
                  our clients. With a focus on user-centric design principles
                  and cutting-edge technologies, we strive to exceed
                  expectations and help businesses thrive in the digital
                  landscape.
                </p>
              </div>
              <div className="card">
                <p className="card-title">
                  Transforming Ideas into Seamless Experiences:
                </p>
                <p className="card-content">
                  Our mission at UIUX is to transform ideas into seamless
                  experiences that leave a lasting impression. Through our
                  expertise in UI/UX development, we aim to bridge the gap
                  between user needs and business goals. By combining
                  creativity, research, and meticulous attention to detail, we
                  craft user interfaces that are aesthetically pleasing and
                  optimized for conversion. Our mission is to empower our
                  clients with digital solutions that inspire and elevate their
                  brand presence.
                </p>
              </div>
              <div className="card">
                <p className="card-title">Enhancing Digital Interactions:</p>
                <p className="card-content">
                  At UIUX, we are on a mission to enhance digital interactions
                  through exceptional UI/UX development. We believe that
                  well-designed interfaces have the power to captivate users,
                  foster engagement, and drive business success. By employing
                  user-centered methodologies and leveraging the latest design
                  trends, we create immersive experiences that seamlessly blend
                  form and function. Our mission is to help businesses stand out
                  and deliver memorable digital journeys.
                </p>
              </div>
            </div>
          </div>
          <div className="vision-div">
            <p className="title">Vision : </p>
            <div className="cards-container">
              <div className="card">
                <p className="card-title">Innovation and Leadership:</p>
                <p className="card-content">
                  Our vision is to be a trailblazer in UI/UX design, constantly
                  pushing the boundaries of creativity and technology. We aspire
                  to be recognized as industry leaders, driving innovation and
                  setting new trends in user experience. By staying ahead of the
                  curve and embracing emerging technologies, we aim to shape the
                  future of UI/UX and provide our clients with cutting-edge
                  solutions. We strive to lead the industry by staying ahead of
                  emerging trends and consistently delivering groundbreaking
                  user experiences.
                </p>
              </div>
              <div className="card">
                <p className="card-title">
                  Exceptional User-Centric Experiences:
                </p>
                <p className="card-content">
                  We envision a future where every digital interaction is
                  intuitive, engaging, and memorable. Our focus is on creating
                  user-centric experiences that prioritize the needs and desires
                  of the end-user. Through in-depth research, user testing, and
                  meticulous attention to detail, we strive to deliver
                  interfaces that exceed expectations, foster emotional
                  connections, and leave a lasting impact.
                </p>
              </div>
              <div className="card">
                <p className="card-title">
                  Empowering Businesses and Driving Success:
                </p>
                <p className="card-content">
                  Our vision is to empower businesses to thrive in the digital
                  landscape through outstanding UI/UX design. We believe that
                  well-designed interfaces can significantly impact brand
                  perception, user engagement, and business performance. By
                  delivering solutions that align with our clients' goals and
                  target audience, we aim to drive their success, elevate their
                  brand presence, and foster long-term partnerships based on
                  mutual growth and achievement.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
