import React, { Component } from "react";
import menuIcon from "../icons/menu.png";
import { scroller } from "react-scroll";

export default class Header extends Component {
  state = {
    sideMenu: false,
  };

  handleMenu = () => {
    this.setState((prev) => ({ sideMenu: !prev.sideMenu }));
  };

  scroll = (pageId) => {
    scroller.scrollTo(pageId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
  };

  render() {
    const { sideMenu } = this.state;
    return (
      <div className="w-full h-10">
        <header className="absolute w-full md:flex md:justify-end">
          <div className=" text-white md:hidden w-100 ">
            <button onClick={this.handleMenu} >
              <img src={menuIcon} alt ="menu icon" className="fill-white text-white"/>
            </button>
          </div>
          <nav
            className={`flex flex-col md:flex-row w-1/3 md:space-between relative ${
              sideMenu ? "" : "hidden md:flex"
            } `}
          >
            <button className={`p-3 ${sideMenu ? 'bg-white text-gray-800' : 'text-purple-300'} w-full cursor-pointer hover:text-white duration-500`} 
            onClick = {() => {this.scroll('home-page')}} 
            >
              Home
            </button>
            <button className={`p-3 ${sideMenu ? 'bg-white text-gray-800' : 'text-purple-300'} w-full cursor-pointer hover:text-white duration-500`} 
            onClick = {() => {this.scroll('skills-section')}} 
            >
              Habilidades
            </button>
            <button className={`p-3 ${sideMenu ? 'bg-white text-gray-800' : 'text-purple-300'} w-full cursor-pointer hover:text-white duration-500`} 
            onClick = {() => {this.scroll('contact-page')}} 
            >
              Contato
            </button>
          </nav>
        </header>
      </div>
    );
  }
}
