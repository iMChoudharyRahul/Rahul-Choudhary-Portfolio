import React from "react";
import "./Introduction.css";
import RahulPng from "../../Assets/images/RahulChoudhary.png";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={RahulPng} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Rahul Choudhary</span> from{" "}
                <span className="different"> Kuchaman City, Rajashthan</span>. I
                have completed my graduation in Computer Sciense & Engineering
                from Govt.University College of Engineering and Technology(BTU),
                Bikaner. A Full-stack web developer with strong technical
                skills. An impactful team player with creative problem - solving
                skills and willing to build user - friendly products. Looking
                for a role as a developer to implement diverse experience and be
                a part of a growth-oriented environment.
              </h4>
              <h4>Some of my interests apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Playing Badminton & Football{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Social and Agriculture work{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watching Movies{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Reading Business and Educational Books{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
