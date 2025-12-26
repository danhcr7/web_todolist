import { useReducer, useEffect } from "react";
function reducer(data, action) {
  if (action.type === "getData") {
    return action.payload;
  }
}

function Reducer_product() {
  // https://694cf96cda5ddabf0037fa66.mockapi.io/api/v1/todos
  const [data, setData] = useReducer(reducer, []);
  async function getData() {
    let obj_json = await fetch(
      "https://694cf96cda5ddabf0037fa66.mockapi.io/api/v1/todos"
    );
    let obj_javascript = await obj_json.json();
    setData({ type: "getData", payload: obj_javascript });
  }
  function handleClick() {
    getData();
  }
  return (
    <>
      <button type="button" onClick={handleClick}>
        click
      </button>
      <div>
        {data.map((item) => {
          return (
            <div>
            <div>ID: {item.id}</div>
            <div>Name: {item.name}</div>
            <div>Price: {item.price}</div>
            <div>
              <img src={item.image} />
            </div>
          </div>
          );
        })}
      </div>
    </>
  );
}
export default Reducer_product;
