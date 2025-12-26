import { useState, useReducer, useEffect } from "react";
import "./Todolist.css";
let toDo_CanLam = "";
function Todolist() {
  const [todos, setTodos] = useState("");
  const [dataInput, setDataInput] = useState("");
  // Viết sự kiện xử lý cho ô input:
  const handleChange = (e) => setDataInput(e.target.value);
  // Viết sự kiện Xóa:
  const handleClick_Xoa = () => {
    setDataInput("");
    toDo_CanLam = "";
  };
  // Viết sự kiện Thêm:
  const handleClick_Them = () => {
    toDo_CanLam += dataInput + "\n";
    setTodos(toDo_CanLam);
  };
  return (
    <>
      <div className="Todolist">
        <div className="session-header">
          <div className="inner-session-header">Todo App👌</div>
        </div>
        <div className="session-button">
          <div className="box-1">
            <input
              className="input-todos"
              type="input"
              placeholder="Nhập việc bạn cần làm😍"
              value={dataInput}
              onChange={handleChange}
            />
          </div>
          <div className="box-2">
            <button
              type="button"
              className="btn-them"
              onClick={handleClick_Them}
            >
              Thêm
            </button>
            <button
              type="button"
              className="btn-xoahet"
              onClick={handleClick_Xoa}
            >
              Xóa
            </button>
            <button type="button" className="btn-lienhe">
              Connect
            </button>
          </div>
        </div>
        <div className="session-content">
          <div>{toDo_CanLam}</div>
        </div>
      </div>
    </>
  );
}
export default Todolist;
