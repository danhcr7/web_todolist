import { useState } from "react";
import { useReducer } from "react";
function reducer(state, action) {
  if (action.type === "Cong") {
    return state + 1;
  } else if (action.type === "Tru") {
    return state - 1;
  } else if (action.type === "Reset") {
    return 0;
  } else {
    return state;
  }
}
function UseReducer() {
  //   const [count, setCount] = useState(0);
  //   const handleClick = () => {
  //     setCount(count + 1);
  //   };
  //   const handleClick1 = () => {
  //     setCount(count - 1);
  //   };
  //   const handleClick2 = () => {
  //     setCount(0);
  //   };
  function handClickCong() {
    dispath({ type: "Cong" });
  }
  function handClickTru() {
    dispath({ type: "Tru" });
  }
  function handClickReset() {
    dispath({ type: "Reset" });
  }
  const [count, dispath] = useReducer(reducer, 0);
  return (
    <>
      <div className="container-item">
        <div className="session-btn">
          <button className="btn_click_cong" onClick={handClickCong}>
            +
          </button>
          <button className="btn_click_tru" onClick={handClickTru}>
            {" "}
            -{" "}
          </button>
          <button className="btn_click_reset" onClick={handClickReset}>
            {" "}
            reset{" "}
          </button>
        </div>
        <div className="boxx">{count}</div>
      </div>
    </>
  );
}
export default UseReducer;
