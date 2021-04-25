// import Square from "./Square";
// import Hero from "./Hero";
//
//
// class Board {
//     squares:Array<Array<Square>>;
//     constructor (gridHeight:number,gridWidth:number){
//         this.squares= this.makeEmptyBoard(gridHeight, gridWidth);
//     }
//     getMappable (){
//         return this.squares;
//     }
//
//     makeEmptyBoard (gridHeight:number, gridWidth:number):Array<Array<Square>>{
//         let bigArr = [];
//         for(let i = 1; i  <= gridHeight; i++){
//             let smallArr = [];
//             for(let j = 1; j <= gridWidth; j++){
//                 const props = {};
//                 smallArr.push(new Square(props));
//             }
//             bigArr.push(smallArr);
//         }
//         return bigArr;
//     }
//
//     placePiece(piece:Hero, coordinates:[number, number]){
//         let row = this.squares[coordinates[0]];
//         let square = row[coordinates[1]];
//         square.placePiece(piece);
//     }
// }
//
// export default Board;
export default null;