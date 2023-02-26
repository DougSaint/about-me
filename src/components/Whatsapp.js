import React, { Component } from "react";
import whatsapp from "../icons/whatsapp.gif";
export default class Whatsapp extends Component {
  render() {
    return (
      <a href="https://wa.me/5538999944663" target="_blank" rel="noreferrer" className="fixed bottom-2 right-3 text-sm text-white">
       Whatsapp
        <div className=" flex justify-center overflow-hidden cursor-pointer bg-none">
          <img src={whatsapp} alt="whatsapp-contact" className="rounded-full"/>
        </div>
      </a>
    );
  }
}
