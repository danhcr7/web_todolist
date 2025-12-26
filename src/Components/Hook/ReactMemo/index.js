import { useState } from "react";
import Solanbirender from "../Solanbirender";


import { createContext } from "react";
export const Acontext = createContext();

function ReactMemo() {
    const [click, setClick] = useState(0);
    const [render, setRender] = useState(0);
    function handleClick() {
        setClick(click + 1);
        setRender(render + 1);
    }
    return (
        <>
        <div className="box">
            <Acontext.Provider value = {render}>
                <Solanbirender />
            </Acontext.Provider>
            <div className="innerBox">
            <button className="clickMe" type="button" onClick={handleClick}>
                Click me
            </button>
            <div className="sestion-Result">{`Số lần lick: ${click} lần`}</div>
            </div>
        </div>
        </>
    );
}
export default ReactMemo;
