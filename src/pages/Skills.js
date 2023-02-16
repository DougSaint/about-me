import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import WriteText from "../components/WriteText";
import CardSkill from "../components/CardSkill";
import { texts } from "../texts";
import arrowDown from "../icons/down-arrow.png";
import { animateScroll as scroll, scroller } from "react-scroll";

export default function Skills() {
  const [startRender, setStateRender] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5, // Define a porcentagem de interseção necessária para que o elemento seja considerado visível
  });

  function handleVisibilityChange(isVisible) {
    if (isVisible && !startRender) {
      setStateRender(true);
    }
  }

  const [renderCard, setRenderCard] = useState(0);

  useEffect(() => {
    if (startRender) {
      const intervalId = setTimeout(() => {
        setRenderCard(renderCard + 1);
      }, 500);
      if (renderCard > 12) {
        clearInterval(intervalId);
      }
    }
  }, [renderCard, startRender]);

  const scrollToHome = () => {
    scroller.scrollTo("home-page", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const scrollToContact = () => {
    scroller.scrollTo("contact-page", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div ref={ref} className="h-screen" id="skills-section">
      {startRender && (
        <section>
          <div className="pt-12 w-100 ">
            <WriteText
              text=" Minhas Habilidades"
              styles="text-2xl text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-200 to-blue-400"
              speed="60"
            />
          </div>
          <div className="grid grid-cols-2 w-4/6 mx-auto gap-x-6 gap-y-6 mt-5 md:grid-cols-3 place-items-center">
            {texts.HardSkills.map((skill, index) => (
              <CardSkill
                key={index}
                img={skill.img}
                skillName={skill.name}
                textColor="text-white"
                imgStyle={skill.styles}
                divStyle={renderCard >= index + 3 ? "flex" : "hidden"}
              />
            ))}
          </div>

          <div className="flex center w-4/6 justify-around mx-auto">
            <div
              onClick={scrollToHome}
              className={`${
                renderCard >= 11 ? "opacity-100" : "opacity-0"
              } flex flex-col justify-center items-center w-full mt-5 animate-bounce cursor-pointer`}
            >
              <button
                className={`mt-5 rounded-xl text-white w-6/6 mx-auto flex text-center`}
              >
                HomePage{" "}
              </button>
              <img src={arrowDown} className={"w-2/6 rotate-180 md:w-1/6"} />
            </div>

            <div
              onClick={scrollToContact}
              className={`${
                renderCard >= 11 ? "opacity-100" : "opacity-0"
              } flex flex-col justify-center items-center w-full mt-5 animate-bounce cursor-pointer`}
            >
              <button
                className={`mt-5 rounded-xl text-white w-6/6 mx-auto flex text-center`}
              >
                Contato{" "}
              </button>
              <img src={arrowDown} className={"w-2/6 md:w-1/6"} />
            </div>
          </div>
        </section>
      )}

      {handleVisibilityChange(inView)}
    </div>
  );
}