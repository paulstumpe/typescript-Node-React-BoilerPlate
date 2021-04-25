// import Hero from "./Hero";
// import emptySquare from "../images/emptySquare.png"
// import stickMan from "../images/img_2.png";
// import React, {ClassAttributes} from "react";
// import MyContext from "./CreateContext";
// type MyProps = {
//     Hero?: Hero
// }
// type MyState = {
//     unitOccupying?: Hero
//     occupied: boolean,
//     highlighted:boolean,
// }
//
//
// export default class Square extends React.Component<MyProps, MyState> {
//     contextType = MyContext;
//     static defaultProps = {
//         Hero: undefined
//     }
//     state: MyState = {
//         unitOccupying: undefined,
//         occupied: false,
//         highlighted: false,
//     }
//
//
//     constructor(props: MyProps | Readonly<MyProps>) {
//         super(props);
//         this.state.unitOccupying = undefined;
//         this.state.occupied = false;
//         this.handleClick = this.handleClick.bind(this);
//         this.render = this.render.bind(this);
//     }
//
//     placePiece(piece: Hero) {
//         debugger;
//         this.setState((state:MyState, props:MyProps):MyState=>{
//             return {
//                 unitOccupying: piece,
//                 occupied:true,
//                 highlighted: false,
//             }
//         })
//
//
//         this.setState(this.state, ) = piece;
//         this.state.occupied = true;
//         return piece;
//     }
//
//     getImage = () => this.state.unitOccupying ? this.state.unitOccupying.image : <img alt={"an Empty Square"} src={emptySquare}/>
//
//     getPiece(): Hero | undefined {
//         return this.state.unitOccupying;
//     }
//
//     removePiece() {
//         const piece = this.getPiece();
//         this.state.unitOccupying = undefined;
//         this.state.occupied = false;
//         return piece;
//     }
//     unHighlight (){
//         this.setState((state:MyState, props:MyProps):MyState=>{
//             return {
//                 unitOccupying: this.state.unitOccupying,
//                 occupied:true,
//                 highlighted: false,
//             }
//         })
//     }
//     highlight (){
//         this.setState((state:MyState, props:MyProps):MyState=>{
//             return {
//                 unitOccupying: this.state.unitOccupying,
//                 occupied:true,
//                 highlighted: true,
//             }
//         })
//     }
//     handleClick (){
//         if(this.state.occupied){
//             if(this.state.highlighted){
//                 this.unHighlight()
//             } else {
//                 this.highlight()
//             }
//         } else{
//             this.placePiece(new Hero());
//         }
//     }
//
//     render(): React.ReactNode {
//
//         return (
//             <span
//                 style={{
//                     paddingTop:'10px',
//                     backgroundColor:this.state.highlighted ? 'rgba(0, 0, 255, .5)': 'white',
//                     minHeight: '120px',
//                     display:'inline-block'
//
//                 }}
//
//                 onClick={this.handleClick}
//             >
//                 <span style={{padding:'5px'}}>
//                     {this.getImage()}
//                 </span>
//                 <MyContext.Consumer>
//                     {value => (<div>xd</div>)}
//                 </MyContext.Consumer>
//
//             </span>)
//
//     }
// }
export default null;