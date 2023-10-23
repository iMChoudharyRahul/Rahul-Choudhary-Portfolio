import React from "react";
import "./Projects.css";
import fabindia from "../../Assets/images/fabindia.PNG";
import foodweb from "../../Assets/images/food-website.netlify.app.jpeg"
import photoShotWeb from "../../Assets/images/photographic-websites.png"
import paytmmall from "../../Assets/images/paytmmall.png"
import immdbClone from "../../Assets/images/imdb-clone.png"
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiRedux,
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
                  src={immdbClone}
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
                  src={foodweb}
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
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src={paytmmall}
                  alt="paytmmall"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>PaytmMall Clone</h2>
              <p>
                It was a team project.We implemented some product sorting and filtering features, We used local storage for data handling and implemented signup, login, individual product page, category-wise page, address input, cart, checkout page, etc.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://suspicious-wing-0660d2.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/sameerah2710/PaytmMall-clone"
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
                  src={fabindia}
                  alt="fabindia"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Fabindia Clone</h2>
              <p>
                FabIndia is an e-commerce platform where user can buy clothes and home garment.In it there are many category of clothes. User can add as many as products in his/her cart and buy them.
              </p>
              <div>
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
              </div>
              <div>
                <a
                  href="https://fabindia-masai.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/iMVenkateshMundkar/Fabindia-clone"
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