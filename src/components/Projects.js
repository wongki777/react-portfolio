import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.jpeg";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.jpg";
import projImg10 from "../assets/img/project-img10.jpg";
import projImg11 from "../assets/img/project-img11.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Futurististic Portfolio",
      description: "React Website developed by me to showcase my projects",
      imgUrl: projImg1,
      liveLink: '#',
      sourcelink: '#',
    },
    {
      title: "NFTVortex: Unleashing Digital Collectibles",
      description: "NFT Website developed with React and SASS",
      imgUrl: projImg4,
      liveLink: '#',
      sourcelink: 'https://github.com/wongki777/react-nft-website',
    },
    {
      title: "Animated Slider Website",
      description: "Website developed while learning JavaScript",
      imgUrl: projImg5,
      liveLink: 'https://delightful-twilight-e3e2ed.netlify.app/',
      sourcelink: 'https://github.com/wongki777/animated-website-slider',
    },
  ];

  const projects2 = [
    {
      title: "Memetify",
      description: "React Meme Generator",
      imgUrl: projImg9,
      liveLink: 'https://memetify.netlify.app/',
      sourcelink: 'https://github.com/TracyMuso/space-travelers-hub-online',
    },
    {
      title: "CreativeMinds",
      description: "A task organizer app developed using Ruby on Rails. My Group Final Project in my Webdev Bootcamp.",
      imgUrl: projImg10,
      liveLink: 'https://www.youtube.com/watch?v=QkFV-GzoGJs&ab_channel=LeWagon',
      sourcelink: 'https://github.com/EkkiiH/creative-minds',
    },
    {
      title: "AnimalBnB",
      description: "Animal Booking and Listing Website (AirBnB Clone) using Ruby on Rails. My Group Project in my Webdev Bootcamp.",
      imgUrl: projImg11,
      liveLink: '#',
      sourcelink: 'https://github.com/EkkiiH/airbnb-first-app',
    },
  ];

  const projects3 = [
    {
      title: "Saddleback Church Berlin Website",
      description: "Assigned as one of the designers for the launch of the website.",
      imgUrl: projImg2,
      liveLink: 'https://www.saddleback.berlin/',
      sourcelink: '#',
    },
    {
      title: "Frais",
      description: "Natural Soap Website",
      imgUrl: projImg6,
      liveLink: 'https://oliviawong07.wixsite.com/portfolio',
      sourcelink: '#',
    },
    {
      title: "SereniTea",
      description: "Cafe Website",
      imgUrl: projImg3,
      liveLink: 'https://oliviawong07.wixsite.com/sereniteawebsite',
      sourcelink: '#',
    },
    {
      title: "LoveLens",
      description: "Wedding Photography Website",
      imgUrl: projImg7,
      liveLink: 'https://oliviawong07.wixsite.com/lovelenswebsite',
      sourcelink: '#',
    },
    {
      title: "Pawfriend Pet",
      description: "Pawfriend Pet Salon Website",
      imgUrl: projImg8,
      liveLink: 'https://oliviawong07.wixsite.com/pawfriendwebsite',
      sourcelink: '#',
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Projects</h2>
                <p>
                  Below are a few of my notable projects, some developed using React, APIs, Webpack, Bootstrap or WIX.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Websites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Apps</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web Designs</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
