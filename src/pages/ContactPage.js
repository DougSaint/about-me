import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import ArrowBounce from "../components/ArrowBounce";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [startRender, setStateRender] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    validateForm();
  };

  const { ref, inView } = useInView({
    threshold: 0.5, // Define a porcentagem de interseção necessária para que o elemento seja considerado visível
  });

  function handleVisibilityChange(isVisible) {
    if (isVisible && !startRender) {
      setStateRender(true);
    }
  }

  function isValidEmail(email) {
    // Expressão regular para validar o email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateForm();
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
    validateForm();
  };

  const validateForm = () => {
    const isValid = name !== "" && email !== "" && subject !== "";
    setIsFormValid(isValid);
  };

  return (
    <div
      className="flex justify-around items-center flex-col h-screen"
      id="contact-page"
      ref={ref}
    >
      <div className="w-full flex flex-around">
        <ArrowBounce text ="Pagina Inicial" pageId="home-page" direction="up"/>
        <ArrowBounce text ="Habilidades" pageId="skills-section" direction="up"/>
      </div>
      <div
        className={`${
          startRender ? "opacity-1" : "opacity-0"
        } transition-opacity duration-[2000ms] easy-in-out`}
      >
        <h1 className="text-white text-2xl">Estou ansioso pelo seu contato</h1>
      </div>
      {handleVisibilityChange(inView)}
      <form
        className="bg-none shadow-md rounded px-8 pt-6 pb-8 mb-4"
        
        action ="https://formsubmit.co/ds4208151@gmail.com"
        method="POST"
        
      >
        <input type="hidden" name="_next" value="http://localhost:3000/" />
        <label
          className="block text-purple-200 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Nome
        </label>
        <input
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline focus:scale-105"
          id="name"
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={handleNameChange}
        />
        <label
          className="block text-purple-200 text-sm font-bold mb-2 mt-4"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline focus:scale-105 ${
            email && !isValidEmail(email) && "border-red-500"
          }`}
          name="email"
          id="email"
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={handleEmailChange}
        />
        {email && !isValidEmail(email) && (
          <p className="text-red-500 text-xs italic mt-2">
            Por favor, informe um endereço de email válido.
          </p>
        )}
        <label
          className="block text-purple-200 text-sm font-bold mb-2 mt-4"
          htmlFor="subject"
        >
          Assunto
        </label>
        <input
          name="subject"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline focus:scale-105"
          id="subject"
          type="text"
          placeholder="Assunto"
          value={subject}
          onChange={handleSubjectChange}
        />
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4 ${
            isSubmitting && "cursor-not-allowed opacity-50"
          }`}
          type="submit"
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
        {isSubmitted && (
          <p className="text-green-500 font-bold mt-4">
            Email enviado com sucesso!
          </p>
        )}
      </form>
    </div>
  );
};
export default ContactPage;
