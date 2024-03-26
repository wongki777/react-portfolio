import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.jpg"

export const Skills = () => {
  // this is for the multi carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>My Skill Stack</h2>
                        <p>Here are some awesome programming languages and tools I work with:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>SASS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>JavaScript (ES6)</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>UI/UX</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Figma</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>API</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Ruby on Rails</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="" />
                                <h5>WIX</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
