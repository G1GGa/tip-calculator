import { useState } from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const App = () => {
  const [price, setPrice] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [people, setPeople] = useState(0);
  return (
    <div className="desktop">
      <div className="main-content">
        <LeftContent
          people={people}
          setPeople={setPeople}
          setSelectedTip={setSelectedTip}
          inputValue={price}
          onChange={setPrice}
        />
        <RightContent
          people={people}
          selectedTip={selectedTip}
          amount={price}
        />
      </div>
    </div>
  );
};

export default App;
