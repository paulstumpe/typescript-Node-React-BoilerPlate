import Hero from "./Hero";
import emptySquare from "../images/emptySquare.png"
import stickMan from "../images/img_2.png";
import React, {Props} from "react";
type MyProps = {

}
type MyState = {

}


class Square extends React.Component<MyProps, MyState>{
    state: MyState = {

    }

    occupied: boolean;
    unitOccupying: Hero|null;

    constructor(props: Props) {
        super(props);
        this.unitOccupying=null;
        this.occupied=false;
    }

    placePiece(piece:Hero){
        this.unitOccupying = piece;
        this.occupied=true;
        return piece;
    }

    getImage = ()=>this.unitOccupying?this.unitOccupying.image:<img alt={"an Empty Square"} src={emptySquare}/>

    getPiece():Hero|null{
        return this.unitOccupying;
    }
    removePiece(){
        const piece = this.getPiece();
        this.unitOccupying = null;
        this.occupied=false;
        return piece;
    }
    render(){

    }
}
export default Square;