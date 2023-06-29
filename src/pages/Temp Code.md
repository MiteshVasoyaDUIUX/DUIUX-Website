 <div className="card-slider">
              <div className="prev-btn" onClick={handlePrevClick}></div>
              <div
                className="left-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${services[prevServiceCards].img})`,
                  backgroundSize: "120%",
                  backgroundPosition: "10% 10%",
                }}
              ></div>
              <div
                className="main-card"
                id="main-card-id"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.80), rgba(0,0,0,0.80)), url(${services[activeServiceCards].img})`,
                  backgroundSize: "120%",
                  backgroundPosition: "10% 10%",
                }}
                onMouseMove={(e) => handleMouseOnCard(e)}
              >
                <div className="title">
                  {services[activeServiceCards].title}
                </div>
                <div className="content">
                  {services[activeServiceCards].content}
                </div>
              </div>
              <div
                className="right-card"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${services[nextServiceCards].img})`,
                  backgroundSize: "120%",
                  backgroundPosition: "10% 10%",
                }}
              ></div>
              <div className="next-btn" onClick={handleNextClick}></div>
            </div>