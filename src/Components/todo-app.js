import React, { useState } from "react";
import todo from "../images/todo.svg";
import "../css/Todo.css";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [item, setItem] = useState([]);

  const addItems = () => {
    if (!inputData) {
    } else {
      setItem([...item, inputData]);
      setInputData("");
    }
  };

  const removeItem = (i) => {
    const restItems = item.filter((elem) => {
      return elem !== i;
    });
    setItem(restItems);
  };

  const removeAllItems = () => {
    setItem([]);
  };

  return (
    <React.Fragment>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="ToDo-Logo" />
            <figcaption>Add your list here... ✌</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Items... "
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="add item"
              onClick={addItems}
            ></i>
          </div>

          <div className="showItems">
            {item.map((val, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{val}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="delete item"
                    onClick={() => removeItem(val)}
                  ></i>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAllItems}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Todo;
