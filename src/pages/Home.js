import React, { Component } from "react";
import { texts } from "../texts";
import WriteText from "../components/WriteText";
import myImage from "../icons/me.png";
import linkedinLogo from "../icons/linkedin.svg";
import githubLogo from "../icons/github.svg";
import ArrowBounce from "../components/ArrowBounce";
import IconBrand from "../components/IconBrand";

export default class Home extends Component {
  state = {
    stage: 5,
  };

  nextStage = () => {
    this.setState((prev) => ({ stage: prev.stage + 1 }));
  };

  render() {
    const { stage } = this.state;
    return (
      <div className="flex flex-col h-screen justify-start" id="home-page">
        <main>
          <section>
            <div className=" text-2xl text-white w-4/6 mx-auto mt-10">
              <WriteText nextStage={this.nextStage} text={"Olá,"} />
              {stage >= 1 && (
                <WriteText
                  nextStage={this.nextStage}
                  text={`sou ${texts.myName}`}
                />
              )}
              {stage >= 2 && (
                <WriteText
                  styles={"text-red-400"}
                  nextStage={this.nextStage}
                  text={`e   sou ${texts.myProfission}`}
                />
              )}
            </div>
          </section>

          <div className="flex flex-col md:flex-row justify-center items-center md:mx-auto md:mt-[10vh]">
            <div
              className={`${
                stage >= 3 ? "opacity-100" : "opacity-0"
              }  transition delay-400 duration-200 ease-in-out md:flex md:justify-center w-4/6 md:w-2/12 rounded-full bg-img overflow-hidden`}
            >
              <img src={myImage} alt="cartoon of me" />
            </div>
            <div className="w-4/6 h-full mt-3 self-center md:ml-3 flex items-center mb-auto md:w-2/6 md:flex-col">
              {stage >= 3 && (
                <WriteText
                  text={"Tenho 23 anos e estudo desenvolvimento web na Trybe."}
                  nextStage={this.nextStage}
                  styles="text-purple-200 self-center  mx-auto"
                />
              )}
              <div className="hidden md:flex flex-col w-full ">
                <p className="text-purple-200 text-center mt-[10vh] mb-5 ">
                  Você pode me encontrar aqui{" "}
                </p>
                <div className="flex w-full mx-auto justify-around md:mt-auto mt-5">
                  <IconBrand
                    src={linkedinLogo}
                    name="LinkedIn"
                    url="https://www.linkedin.com/in/doug-santos/"
                  />
                  <IconBrand
                    src={githubLogo}
                    name="GitHub"
                    url="https://github.com/DougSaint"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${
              stage >= 4 ? "opacity-100 md:hidden" : "opacity-0 md:hidden"
            }`}
          >
            <p className="text-purple-200 text-center mt-5 ">
              Você pode me encontrar aqui{" "}
            </p>
            <div className="flex w-3/6 mx-auto justify-around md:mt-10">
              <IconBrand
                src={linkedinLogo}
                name="LinkedIn"
                url="https://www.linkedin.com/in/doug-santos/"
              />
              <IconBrand
                src={githubLogo}
                name="GitHub"
                url="https://github.com/DougSaint"
              />
            </div>

          </div>
          <div
              className={`${stage >= 4 ? "opacity-100" : "opacity-0"} 
          w-6/6 mx-auto flex justify-around w-full absolute bottom-0`}
            >
              <ArrowBounce text={"Habilidades"} pageId="skills-section" />
              <ArrowBounce text={"Contato"} pageId="contact-page" />
            </div>
        </main>
      </div>
    );
  }
}
