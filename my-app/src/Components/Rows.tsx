import React from "react";
import Square from "./Square";
import Column from "./Column";

// function Rows  ({ rows }: { rows: Array<Array<Square>> }): JSX.Element =>(
type AppProps = {
    rows:Array<any>
}

const Rows =  ({ rows }: AppProps) =>(
    <div>
        {rows.map((row:Array<Square>, index)=>(
            <div>
                <Column row={row}/>
                R {index+1}
            </div>
        ))}
    </div>
)
export default Rows;