import stickMan from "../images/img_2.png";
import React from "react";


class Hero{
    hp: number;
    attack: number;
    movement: number;
    statuses:Array<unknown>;
    image: JSX.Element = <img alt={"picture of a stickman"} src={stickMan}/>;
    constructor() {
        this.hp = 10;
        this.attack=1;
        this.movement=2;
        this.statuses=[];
    }

}
export default Hero;