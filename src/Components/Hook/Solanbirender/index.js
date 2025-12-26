import { useEffect, useState } from "react";
import { useContext } from "react";
import { Acontext } from "../ReactMemo";
import { memo } from "react";
function Solanbirender() {
    const render = useContext(Acontext);
    return (
        <>
           <div className="render">
                Solanbirender: {render} (lần)
           </div>
        </>
    )
}
export default memo(Solanbirender);