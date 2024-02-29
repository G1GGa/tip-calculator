import { useEffect, useState } from "react";

const RightContent = ({ amount, selectedTip, people }) => {
  const [state, setState] = useState(0);
  const [tip, setTip] = useState(0);

  const caluclate = () => {
    const percent = (parseInt(amount) * parseInt(selectedTip)) / 100;
    setState(() => percent);
    const calc = parseInt(percent) / parseInt(people);
    setTip(() => calc);
  };

  useEffect(() => {
    caluclate();
  }, [amount, selectedTip, people]);

  return (
    <div className="rightContent">
      <div className="tipAmount">
        <div>
          <h3>Tip Amount</h3>
          <p>{people} / person</p>
        </div>
        <div className="price1">
          ${selectedTip && people ? tip?.toFixed(2) : 0}
        </div>
      </div>
      <div className="total">
        <div className="totalPerson">
          <h3>Total</h3>
          <p>{people} / person</p>
        </div>
        <div className="price2">
          ${" "}
          {amount && state && people
            ? (
                (parseInt(amount) + parseInt(state)) /
                parseInt(people)
              )?.toFixed(2)
            : 0}
        </div>
      </div>
      <button className="reset">RESET</button>
    </div>
  );
};

export default RightContent;
