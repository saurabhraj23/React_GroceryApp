import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/App.module.css";
import { Items } from "./components/Items";
import { useState } from "react";

function App() {
  let items = [];
  let [ArrayVal, setArrayVal] = useState(items);

  let handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        console.log("Invalid Input");
      } else {
        let newVal = [...ArrayVal, event.target.value];
        setArrayVal(newVal);
        event.target.value = "";
      }
    }
  };

  let handleDelete = (index) => {
    let temp = [...ArrayVal];
    temp.splice(index, 1);
    setArrayVal(temp);
  };

  let handleSubmit = () => {
    let textInput = document.getElementById("inputData");
    let value = textInput.value;
    if (!ArrayVal.includes(value) && value.length !== 0) {
      let inpData = [...ArrayVal, value];
      setArrayVal(inpData);
      textInput.value = "";
    }
  };

  return (
    <div className={styles.divApp}>
      <div className={styles.divHead}>
        <h1 className={styles.h1div}>Grocery Items</h1>
        <input
          className={styles.inputBox}
          onKeyDown={(event) => handleOnKeyDown(event)}
          type="text"
          id="inputData"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {ArrayVal.length === 0 ? (
        <h2
          style={{ color: "black", textAlign: "center", fontStyle: "italic" }}
        >
          Empty here
        </h2>
      ) : null}
      <ul className="list-group">
        {ArrayVal.map((item, index) => (
          <div key={index} className={styles.divAppIt}>
            <Items item={item} />
            <button className={styles.btn} onClick={() => handleDelete(index)}>
              Delete
            </button>
            {/* <button key={item} className={styles.btn}>
              Add
            </button> */}
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
