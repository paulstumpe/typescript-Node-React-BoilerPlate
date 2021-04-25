import React from 'react';
import {useTheme, Theme} from "./CreateContext";

function Banner() {
const {theme, setTheme} = useTheme();
console.log(theme);

    return (
        <div className="Banner">
            <header className="Banner-header">
                <div style={css}>
                    This is the top banner x
                </div>
                <button
                    onClick={()=>{
                        return setTheme('blah')
                    }}
                >switches theme</button>
            </header>
        </div>
    );
}

let css = {
    border: 'solid'
}

export default Banner;
