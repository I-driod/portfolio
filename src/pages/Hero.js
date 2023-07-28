import React from "react";
import "./Hero.css";
import { SiBuymeacoffee, SiNotion } from "react-icons/si";
// import {IoLogoWhatsapp} from 'react-icons/io'
import { MdEmail } from "react-icons/md";
import { RxNotionLogo } from "react-icons/rx";
import { BsGithub } from "react-icons/bs";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { ImBehance2 } from "react-icons/im";
// import notion from "./images/logos_notion-icon.png";

import Flutter from "./images/flutter.png";
import Dart from "./images/dart.png";
import Firebase from "./images/firebase.png";
import Kotlin from "./images/kotlin.png";

import { FiArrowDownCircle } from "react-icons/fi";
import Figma from "./images/Figma.png";
import { FaGithubAlt, FaLocationArrow } from "react-icons/fa";
// import kiko from "./images/kiko llc.png";
// import svg from "./images/hydra-web.png";
// import Alphabetz from "./images/alphab.png";
// import image from "./images/hydra-mobile.png";
import profile from "./images/pp.png";
// import not from './images/notion.png'
// import BETT from './images/bEHANCE.png'
// import gf from "./images/Google Forms.png";
// import gd from "./images/Google Docs.png";
// import aa from './images/Adobe Animate.png'
// import ap from './images/Adobe Photoshop.png'
import xd from "./images/Adobe XD.png";
import { useNavigate } from "react-router-dom";
// import landd from "./images/LANDING.png";
// import nfft from "./images/nftt.png";

const Hero = () => {
  let navigate = useNavigate();
  return (
    <section className="first-section">
      <nav  className="navbar-div">
        <h4 className="ikenna">Mobile Developer</h4>
        {/* <h4 className="first-sliddo">My Resume</h4>*/}
      </nav>
      <div className="hero-section-div">
        <div className="left-flex-hero">
          <div className="curves">
            <span>Creative & Problem Solving</span>
          </div>
          <div className="name">
            <h1>I'm Godwin David</h1>
            <p>
              A Creative Mobile Developer - Flutter || Dart || Kotlin || Firebase || Provider 
        
            </p>
            <a href="https://github.com/I-driod">
              <button
                style={{
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "43em",
                  textAlign: "left",
                }}
                className="button-resume"
              >
                View my Github
              </button>
            </a>
          </div>
        </div>

      </div>
      <br />
      <div className="works-on">
        <span className="works-on-span">
          <p>Mastery at</p>
          <FaLocationArrow style={{ color: "#80139B" }} />
        </span>
        <img className="hero-img" src={Flutter} alt="Flutter" />
        <img className="hero-img" src={Dart} alt="Dart" />
        <img className="hero-img" src={Firebase} alt="Firebase" />
        <img className="hero-img" src={Kotlin} alt="Kotlin" />

      </div>
      <br />

      <div className="section-featured-works">
        <br />

        <div
          className="section-featured-works-div"
          style={{
            backgroundColor: "purple",
           
          }}
        >
          <h3>
            Featured Projects
            <FiArrowDownCircle
              style={{ fontSize: "1.3em", marginLeft: "0.3em" }}
            />
          </h3>
        </div>

        <div className="section-works" style={{
          gap:'1em'
        }}>
          <a href="https://mono.co">
            <div
              className="details-me"
              style={{
                backgroundColor: "black",
                color: "white",
                marginTop: "0em",
              }}
            >
              <h4>Mono.co Landing Page - African Fintech</h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>
          <a href="https://app.mono.co">
            <div
              className="details-me"
              style={{
                backgroundColor: "black",
                marginTop: "0em",
                color: "white",
              }}
            >
              <h4>Mono.co Web Application - African Fintech</h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>
          <a href="https://acadaboo.com">
            <div
              className="details-me"
              style={{
                backgroundColor: "black",
                marginTop: "0em",
                color: "white",
              }}
            >
              <h4>Acadaboo Landing Page - Nigeria Student Site</h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>
          <a href="https://acadaboo.com/login">
            <div
              className="details-me"
              style={{
                backgroundColor: "black",
                marginTop: "0em",
                color: "white",
              }}
            >
              <h4>Acadaboo Web Application - Nigeria Student Site</h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>
          <a href="https://passcoder.io">
            <div
              className="details-me"
              style={{
                backgroundColor: "black",
                marginTop: "0em",
                color: "white",
              }}
            >
              <h4>Passcoder Landing Page - Nigeria Identity Startup</h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>

          <a href="https://shoppermans-ecommerce-react-store.vercel.app">
            <div
              className="details-me"
              style={{
                backgroundColor: "black",
                marginTop: "0em",
                color: "white",
              }}
            >
              <h4>My Personal E-commerce Shopping Project</h4>
              <span>
                <BsFillArrowUpRightCircleFill className="icon-arrows" />
              </span>{" "}
            </div>
          </a>
         
        </div>
      </div>
      <br />
      <br />
     
      <br />
      <div className="coding-div">
        <h1>About Me</h1>
        <p style={{ marginTop: "-1em" }}>
          I’m Godwin David, a passionate mobileapp Developer seasonedin creating delightful and user-friendly applications ( Flutter
          || Dart || Kotlin )
          <br /> <br />
          What drives me as a developer is the ability to transform ideas into reality. 
          I thrive on challenges and enjoy collaborating with talented teams to turn innovative concepts into polished applications. 
          My approach to app development centers around clean code, intuitive design, and optimal performance.
        </p>

        <h4 style={{ marginTop: "1.3em" }}>Languages and Libraries I Use</h4>
        <ul style={{ marginTop: "-1em" }}>
          <li>Flutter</li>
          <li>Firebase SDK</li>
          <li>Kotlin</li>
          <li>Jetpack Compose</li>
          <li>Provider</li>
          <li>Html & CSS</li>
        </ul>

        <br />
        <img className="img-auto" src={profile} alt="profile" />
        
      </div>
      <br />
      <br /> <br />
      <h3>Let's Connect</h3>
      
      <a href="https://www.buymeacoffee.com/ibenemeikenna">
        <div className="details-me">
          <h4>
            <SiBuymeacoffee className="icon-arrows" />
            Buy Me a Coffee
          </h4>
          <span>
            <BsFillArrowUpRightCircleFill className="icon-arrows" />
          </span>{" "}
        </div>
      </a>
      <a href="https://github.com/Ibeneme">
        <div className="details-me">
          <h4>
            <BsGithub className="icon-arrows" />
            View my Github
          </h4>
          <span>
            <BsFillArrowUpRightCircleFill className="icon-arrows" />
          </span>{" "}
        </div>
      </a>
      {/* <a href='https://github.com/Ibeneme'>
       <div className='details-me'>
        <h4>
        <BsGithub  className='icon-arrows'/>
         View my Github</h4>
       <span> 
       <BsFillArrowUpRightCircleFill className='icon-arrows' />
      
        </span>  </div>
        </a>
 */}
      <a href="Mailto:Ibenemeikenna2021@gmail.com">
        <div
          style={{ color: "white", backgroundColor: "black" }}
          className="details-me blackkk"
        >
          <h4>
            <MdEmail className="icon-arrows" />
            Send me a Mail
          </h4>
          <span>
            <BsFillArrowUpRightCircleFill className="icon-arrows" />
          </span>{" "}
        </div>
      </a>
      {/* <a href='https://wa.link/70sz29'>
       <div className='details-me'>
        <h4>
        <IoLogoWhatsapp className='icon-arrows'/>
         WhatsApp</h4>
       <span> 
       <BsFillArrowUpRightCircleFill className='icon-arrows' />
      
        </span>  </div>
        </a>
 */}
      <br />
      <div
        className="black-div white"
        style={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "-16em",
        }}
      >
        <h1>Working Experience</h1>
        <h3> - 2023</h3>
        <p style={{ marginTop: "-1em" }}>
          Frontend Developer || Product Designer at Antigravitygroup - Hybrid
          <br />
          <p>(April 2023 - Recent)</p>
        </p>
        <h3> - 2023</h3>
        <p style={{ marginTop: "-1em" }}>
          Frontend Developer || Product Manager at Monetyze - Remote
          <br />
          <p>(January 2023 - June 2023)</p>
        </p>
        <h3> - 2022</h3>
        <p style={{ marginTop: "-1em" }}>
          Frontend Developer at Passcoder.io - Remote
          <br />
          <p>(January 2022 - March 2023)</p>
        </p>

        <h3> - 2021</h3>
        <p style={{ marginTop: "-1em" }}>
          Frontend Developer at Hydra.io - Remote
          <br />
          <p>(December 2021 - August 2022)</p>
        </p>

        <h3> - 2021</h3>
        <p style={{ marginTop: "-1em" }}>
          Frontend Developer at Kiko LLC - Remote
          <br />
          <p>(November 2021 - March 2022)</p>
        </p>
      </div>
    </section>
  );
};

export default Hero;
