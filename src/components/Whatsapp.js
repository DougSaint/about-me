import React, { Component } from "react";
import whatsapp from "../icons/whatsapp.gif";
export default class Whatsapp extends Component {
  render() {
    return (
      <a href="https://wa.me/5538999944663" target="_blank">
        <div className="fixed bottom-2 right-3 rounded-full overflow-hidden cursor-pointer ">
          <img src={whatsapp} />
        </div>
      </a>
    );
  }
}
