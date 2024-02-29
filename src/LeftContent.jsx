import { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosContact, IoMdColorFill } from "react-icons/io";

const LeftContent = ({
  value,
  onChange,
  setSelectedTip,
  setPeople,
  people,
}) => {
  const [percents, setPercent] = useState([5, 10, 15, 20, 25]);

  return (
    <div className="leftContent">
      {/*Bill */}
      <form className="billForm">
        <label className="bill" htmlFor="bill">
          Bill
        </label>
        <div className="input_style">
          <BsCurrencyDollar className="sign1" />
          <input
            placeholder="0"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            id="allignRight"
            type="number"
            className="inputLeft"
          ></input>
        </div>
      </form>

      {/*Select Tip % */}
      <div className="types">
        <label htmlFor="selectTip">Select Tip %</label>
        <div className="percent">
          {percents?.map((item) => (
            <div
              key={item}
              onClick={() => setSelectedTip(item)}
              id="percent"
              className="single_tip"
            >
              <p>{item}%</p>
            </div>
          ))}

          <div className="tipCustom">
            <input className="custom" type="number" placeholder="Custom" />
          </div>
        </div>

        {/*Number Of People */}

        <form className="peoples">
          <div className="peoplesFlex">
            <label className="people" htmlFor="people">
              Number of people
            </label>
            {people == 0 ? (
              <div className="err_message ">Can't be zero</div>
            ) : (
              ""
            )}
          </div>

          <div className={`input_style ${people == 0 && "input_error"}`}>
            <IoIosContact className="sign2" />
            <input
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              type="number"
              placeholder="0"
              id="allignRight"
              className="inputLeft inputLeft_error"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeftContent;
