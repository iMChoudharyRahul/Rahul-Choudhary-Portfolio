import React from "react";
import { FaReact, FaHardHat } from "react-icons/fa";
import "./Projects.css";
import foodWeb from "../../Assets/images/food-website.netlify.app.jpeg"
import photoShotWeb from "../../Assets/images/photographic-websites.png"
import imdbClone from "../../Assets/images/imdb-clone.png"
import amazonClone from "../../Assets/images/amazon-clone.png"
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
} from "react-icons/si";
// import {
//   SiBlockchaindotcom,
//   SiHtml5,
//   SiMaterialui,
//   SiChai,
//   SiEthereum,
//   SiExpress,
//   SiSocketdotio,
//   SiTailwindcss,
//   SiReactrouter,
//   SiJavascript,
//   SiMongodb,
//   SiNodedotjs,
//   SiCss3,
//   SiRedux,
// } from "react-icons/si";

const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          Projects   
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={amazonClone}
                  alt="amazon-clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Amazon Clone</h2>
              <p>
              Amazon is an e-commerce platform that sells many product lines, including media (books, movies, music, and software), baby products, consumer electronics, beauty products, groceries, health and personal care products, industrial & scientific supplies, kitchen items, jewelry, watches, sporting goods, toys and games.</p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <FaReact />
              </div>
              <div>
                <a
                  href="https://main--amazon-clone-5d4f2c.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/iMChoudharyRahul/Amazon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> 
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={imdbClone}
                  alt="imdb-clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>IMDB Clone</h2>
              <p>
              IMDb (Internet Movie Database) Web site that provides information about millions of films and television programs as well as their cast and crew.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <FaReact />
              </div>
              <div>
                <a
                  href="https://main--super-horse-202f6e.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/iMChoudharyRahul/IMDB-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> 
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={foodWeb}
                  alt="shopping"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>IndianZyaka food-website</h2>
              <p>
              A website through which you can order food and you find list of food items and our other services.
                {/* Shopping Mart is an ecommerce platform where users can find different kinds of hair products of various brands. User can create an account and login into it. User can check orders ordered by him. User can add addresses and remove them. */}
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                {/* <SiNodedotjs /> */}
                <FaReact />
                {/* <SiExpress />
                <SiMongodb /> */}

              </div>
              <div>
                <a
                  href="https://62f755aeb952c7744cfddf48--profound-blini-55d271.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/iMChoudharyRahul/online-food-indian-zyaka"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> 
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={photoShotWeb}
                  alt="photographic-website"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>MyPixle Portfolio</h2>
              <p>
              Built a Portfolio business website to showcase the photographer's best work. 
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
              </div>
              <div>
                <a
                  href="https://fascinating-bombolone-fc0edf.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/iMChoudharyRahul/HTML---CSS-Mini-Project---HTML---CSS-Mini-Project---sl204uaiu851"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </>
  );
};

export default Projects;