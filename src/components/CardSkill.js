import React, { Component } from "react";

export default class CardSkill extends Component {
  render() {
    const { textColor, img, skillName, imgStyle, divStyle } = this.props;
    return (
      <div className={`${divStyle} border-2 border-red-200 text-center justify-center flex-col items-center w-full p-3 h-full md:w-3/6 cursor-pointer`}>
        <img src={img} alt={skillName} className={`${imgStyle} w-4/6`} />
        <h3 className={textColor}>{skillName}</h3>
      </div>
    );
  }
}
