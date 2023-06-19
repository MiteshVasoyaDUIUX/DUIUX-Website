import React, { useRef } from "react";
// import "./AboutUs.css";
import "./AboutUs2.css";
import Footer from "../components/Footer";

function AboutUs() {
  const scrollRef = useRef();

  //   const [opacity, setOpacity] = useState(0);

  return (
    <>
      <div className="aboutus-page" ref={scrollRef}>
        <div className="page-title">ABOUT US</div>
        <div className="div1">
          <div className="owner-box">
            <div className="owner-img">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/shoppingsite-e25c4.appspot.com/o/Animation%20Images%2Fdummy-man-570x570-1.webp?alt=media&token=04392124-2eed-4b53-9dea-01174ff7ec6b"
                alt=""
              />
            </div>
            <div className="owner-info">
              <div className="name">John Doe</div>
              <div className="role">Founder and CEO</div>
              <div className="bio">
                With over a decade of experience in the UI/UX industry, John Doe
                is a visionary leader passionate about crafting exceptional
                digital experiences. Known for his innovative mindset and
                attention to detail, John has led the company to great success
                by delivering cutting-edge design solutions to clients
                worldwide. His expertise in user-centered design principles,
                creative problem-solving, and strategic thinking has earned him
                a reputation for creating intuitive and visually captivating
                interfaces. John is committed to staying at the forefront of
                industry trends and driving the growth of the UI/UX firm, while
                continuously fostering a collaborative and empowering work
                environment for his team.
              </div>
            </div>
          </div>
          <div className="subdiv1">
            <div className="offerings">
              <p>What We Offer :</p>
              <ul>
                <li>Duis aute irure dolor in</li>
                <li>Excepteur sint occaecat</li>
                <li>Ut enim ad minim</li>
                <li>Lorem ipsum dolor</li>
              </ul>
            </div>
            <div className="ill-img"></div>
          </div>
        </div>
        <div className="div2">
          <div className="mission">
            <div className="title">MISSION</div>
            <div className="cards">
              <div>
                <div className="design"></div>
                <div className="number">1</div>
                <div className="card1">
                  <p>Empowering Exceptional User Experiences :</p>
                  <p>
                    At UIUX, our mission is to empower exceptional user
                    experiences through innovative UI/UX design solutions. We
                    are dedicated to creating intuitive, visually captivating
                    interfaces that engage users and drive meaningful results
                    for our clients. With a focus on user-centric design
                    principles and cutting-edge technologies, we strive to
                    exceed expectations and help businesses thrive in the
                    digital landscape.
                  </p>
                </div>
              </div>
              <div>
                <div className="design"></div>
                <div className="number">2</div>
                <div className="card2">
                  <p>Transforming Ideas into Seamless Experiences: </p>
                  <p>
                    Our mission at UIUX is to transform ideas into seamless
                    experiences that leave a lasting impression. Through our
                    expertise in UI/UX development, we aim to bridge the gap
                    between user needs and business goals. By combining
                    creativity, research, and meticulous attention to detail, we
                    craft user interfaces that are aesthetically pleasing and
                    optimized for conversion. Our mission is to empower our
                    clients with digital solutions that inspire and elevate
                    their brand presence.
                  </p>
                </div>
              </div>
              <div>
                <div className="design"></div>
                <div className="number">3</div>
                <div className="card3">
                  <p>Enhancing Digital Interactions:</p>
                  <p>
                    At UIUX, we are on a mission to enhance digital interactions
                    through exceptional UI/UX development. We believe that
                    well-designed interfaces have the power to captivate users,
                    foster engagement, and drive business success. By employing
                    user-centered methodologies and leveraging the latest design
                    trends, we create immersive experiences that seamlessly
                    blend form and function. Our mission is to help businesses
                    stand out and deliver memorable digital journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="vision">
            <div className="title">VISION</div>
            <div className="cards">
              <div>
                <div className="design"></div>
                <div className="number">1</div>
                <div className="card1">
                  <p>Innovation and Leadership: </p>
                  <p>
                    Our vision is to be a trailblazer in UI/UX design,
                    constantly pushing the boundaries of creativity and
                    technology. We aspire to be recognized as industry leaders,
                    driving innovation and setting new trends in user
                    experience. By staying ahead of the curve and embracing
                    emerging technologies, we aim to shape the future of UI/UX
                    and provide our clients with cutting-edge solutions. We
                    strive to lead the industry by staying ahead of emerging
                    trends and consistently delivering groundbreaking user
                    experiences.
                  </p>
                </div>
              </div>
              <div>
                <div className="design"></div>
                <div className="number">2</div>
                <div className="card2">
                  <p>Exceptional User-Centric Experiences: </p>
                  <p>
                    We envision a future where every digital interaction is
                    intuitive, engaging, and memorable. Our focus is on creating
                    user-centric experiences that prioritize the needs and
                    desires of the end-user. Through in-depth research, user
                    testing, and meticulous attention to detail, we strive to
                    deliver interfaces that exceed expectations, foster
                    emotional connections, and leave a lasting impact.
                  </p>
                </div>
              </div>
              <div>
                <div className="design"></div>
                <div className="number">3</div>
                <div className="card3">
                  <p>Empowering Businesses and Driving Success: </p>
                  <p>
                    Our vision is to empower businesses to thrive in the digital
                    landscape through outstanding UI/UX design. We believe that
                    well-designed interfaces can significantly impact brand
                    perception, user engagement, and business performance. By
                    delivering solutions that align with our clients' goals and
                    target audience, we aim to drive their success, elevate
                    their brand presence, and foster long-term partnerships
                    based on mutual growth and achievement.
                  </p>
                </div>
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
