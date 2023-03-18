import React, { Component } from "react";
import { texts } from "../texts";
import WriteText from "../components/WriteText";
import myImage from "../icons/programmer.png";
import linkedinLogo from "../icons/linkedin.svg";
import githubLogo from "../icons/github.svg";
import ArrowBounce from "../components/ArrowBounce";
import IconBrand from "../components/IconBrand";
import ButtonProjects from "../components/ButtonProjects";

export default class Home extends Component {
  state = {
    stage: 1,
  };

  nextStage = () => {
    this.setState((prev) => ({ stage: prev.stage + 1 }));
  };

  changeBackground = () => {
    this.interval = setInterval(() => {}, 500);
  };

  render() {
    const { stage } = this.state;
    return (
      <main className="flex flex-col h-screen" id="home-page">
        <section>
          <div className=" text-2xl text-white w-4/6 md:w-3/6 mx-auto mt-[5vh] md:mt-[10vh]">
            <WriteText
              nextStage={this.nextStage}
              text={`Olá, sou ${texts.myName}`}
              styles={"break-keep"}
            />
            {stage >= 2 && (
              <WriteText
                styles={"text-red-400"}
                nextStage={this.nextStage}
                text={`e   sou ${texts.myProfission}`}
              />
            )}
          </div>
        </section>

        <div className="flex flex-col md:flex-row-reverse justify-center items-center md:mx-auto md:mt-[5vh]">
          <div
            className={`${
              stage >= 3 ? "opacity-100" : "opacity-0"
            }  transition delay-400 duration-200 ease-in-out md:flex md:justify-center w-4/6 md:w-3/12 p-6 rounded-full `}
          >
            <img src={myImage} alt="cartoon of me" className="w-6/6" />
          </div>
          <div className="w-5/6 h-full mt-3 self-center md:ml-3 flex items-center mb-auto md:w-2/6 md:flex-col break-keep">
            {stage >= 3 && (
              <p className="text-purple-50">
                Tenho 23 anos, estudo Desenvolvimento web{" "}
                <span className="magic-text">FullStack</span> na Trybe.
                Atualmente estou no módulo de Back-end e estou buscando
                oportunidades de trabalho.
              </p>
            )}
            <div
              className={`${
                stage >= 3 ? "opacity-100 " : "opacity-0"
              } hidden md:flex flex-col w-full `}
            >
              <p className="text-pink-400 text-center mt-[10vh] mb-5  text-xl ">
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
            stage >= 3 ? "opacity-100 md:hidden" : "opacity-0 md:hidden"
          }`}
        >
          <p className="text-pink-400 text-xl text-center my-3">
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
        <ButtonProjects />
      </main>
    );
  }
}
