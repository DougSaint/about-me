import React, { Component } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../icons/menu.svg";

export default class Header extends Component {
  state = {
    sideMenu: false,
  };

  handleMenu = () => {
    this.setState((prev) => ({ sideMenu: !prev.sideMenu }));
  };

  render() {
    const { sideMenu } = this.state;
    return (
      <div className="w-full h-10">
        <header className="absolute w-full md:flex md:justify-end">
          <div className=" text-white md:hidden w-100 ">
            <button onClick={this.handleMenu} >
              <img src={menuIcon} className="fill-white text-white"/>
            </button>
          </div>
          <nav
            className={`flex flex-col md:flex-row w-1/3 md:space-between relative ${
              sideMenu ? "" : "hidden md:flex"
            } `}
          >
            <a className={`p-3 ${sideMenu ? 'bg-white text-gray-800' : 'text-white'}  w-full`} href="/" >Home</a>
            <a className={`p-3 ${sideMenu ? 'bg-white text-gray-800' : 'text-white'} w-full`}>Projetos</a>
            <a className={`p-3 ${sideMenu ? 'bg-white text-gray-800' : 'text-white'} w-full`}>Contato</a>
          </nav>
        </header>
      </div>
    );
  }
}
