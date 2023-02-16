import React, { Component } from "react";
import { animateScroll as scroll, scroller } from "react-scroll";
import { texts } from "../texts";
import WriteText from "../components/WriteText";
import pcImage from "../icons/pc-image.png";
import arrowDown from "../icons/down-arrow.png";
import { styles } from "../styles";
import linkedinLogo from "../icons/linkedin.svg";
import githubLogo from "../icons/github.svg";

export default class Home extends Component {
  state = {
    stage: 5,
  };

  nextStage = () => {
    this.setState((prev) => ({ stage: prev.stage + 1 }));
  };

  changeToSkills = () => {
    scroller.scrollTo("skills-section", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  crollToContact = () => {
    scroller.scrollTo("contact-page", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  render() {
    const { stage } = this.state;
    return (
      <div
        className="flex flex-col h-screen justify-start"
        id="home-page"
      >
        <main>
          <section>
            <div className=" text-2xl text-white w-4/6 mx-auto mt-10">
              <WriteText nextStage={this.nextStage} text={"Olá,"} />
              {stage >= 1 && (
                <WriteText
                  nextStage={this.nextStage}
                  text={`Sou ${texts.myName}`}
                />
              )}
              {stage >= 2 && (
                <WriteText
                  styles={"text-red-400"}
                  nextStage={this.nextStage}
                  text={`E sou ${texts.myProfission}`}
                />
              )}
            </div>
          </section>
          <div className="flex flex-col mt-auto">
            <div
              className={`${
                stage >= 3 ? "opacity-100" : "opacity-0"
              } text-slate-300 text-xl mx-auto w-5/6 md:w-4/6 transition delay-700 duration-300 ease-in-out`}
            ></div>
            <div className="flex  md:justify-center md:items-center md:mx-auto">
              <div
                className={`${
                  stage >= 4 ? "opacity-100" : "opacity-0"
                }  transition delay-400 duration-200 ease-in-out md:flex md:justify-center `}
              >
                <img src={pcImage} alt="an computer" className="md:w-6/12" />
              </div>
              <div className="w-8/12 mt-auto h-full self-center md:ml-3 flex items-center mb-auto">
                {stage >= 3 && (
                  <WriteText
                    text={"Estou estudando <Desenvolvimento Web /> pela Trybe"}
                    nextStage={this.nextStage}
                    styles="text-purple-200 self-center  mx-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </main>
        <button
          onClick={this.crollToContact}
          className={`${
            stage >= 3 ? "opacity-100 animate-pulse" : "opacity-0"
          }  rounded-xl bg-purple-400  text-xl md:mt-auto mt-10 w-3/6 mx-auto p-3 transition delay-400 duration-200 ease-in-out`}
        >
          Fale Comigo
        </button>
        <div className={`my-6 md:my-auto ${stage >= 3 ? "opacity-100" : "opacity-0"}`}>
          <h3
            className={`text-center text-xl text-purple-200 flex flex-col`}
          >
            Você pode me encontrar Aqui
          </h3>
          <div className="flex w-3/6 mx-auto justify-around md:mt-auto">
            <a href="https://www.linkedin.com/in/doug-santos/" target="_blank">
              <div className="flex flex-col justify-center items-center">
                <img src={linkedinLogo} alt="linkedin logo" />
                <p className="text-white text-lg">Linkedin</p>
              </div>
            </a>
            <a href="https://github.com/DougSaint" target="_blank">
              <div className="flex flex-col justify-center items-center">
                <img src={linkedinLogo} alt="linkedin logo" />
                <p className="text-white text-lg">GitHub</p>
              </div>
            </a>
          </div>
        </div>
        <div className={`${styles.flexCenter} w-6/6 mx-auto`}>
          <div
            className={`${
              stage >= 3 ? "opacity-100" : "opacity-0"
            }  flex flex-col justify-center items-center w-full animate-bounce cursor-pointer`}
            onClick={this.changeToSkills}
          >
            <button
              className={`rounded-xl text-white w-6/6 mx-auto flex text-center`}
            >
              {" "}
              Hard Skills
            </button>
            <img src={arrowDown} className={"w-2/6 md:w-1/6"} />
          </div>

          <div
            onClick={this.crollToContact}
            className={`${
              stage >= 3 ? "opacity-100" : "opacity-0"
            } flex flex-col justify-center items-center h-full w-full animate-bounce cursor-pointer`}
          >
            <button
              className={`rounded-xl text-white w-6/6 mx-auto flex text-center`}
            >
              Contato{" "}
            </button>
            <img src={arrowDown} className={"w-2/6 md:w-1/6"} />
          </div>
        </div>
      </div>
    );
  }
}
