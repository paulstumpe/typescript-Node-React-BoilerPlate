import React, {Props} from 'react';
import * as helper from "../Helpers/helper";
import {hello} from "../Helpers/helper";
import stickMan from '../images/img_1.png';
import Board from "./Board";
import Rows from "./Rows";
import Hero from "./Hero";






export default  function Map() {
    const l = hello(2);
    const woot = hello(1);
    const gridHeight = 10;
    const gridWidth = 10;

    const board= new Board(gridHeight, gridWidth);
    board.placePiece(new Hero(), [1,1]);
    return (
        <div>
            <Rows rows={board.squares}/>
        </div>
    )
}



