import { Button } from "antd"
import { FaHandScissors, FaHandRock, FaHandPaper } from "react-icons/fa"
import "./ChoicesContainer.css"

const ChoicesCotainer = ({ setUserChoice, setLoader }) => {
  const onChoiceClick = (choice) => {
    setUserChoice(choice)
    setLoader(true)
    setTimeout(() => setLoader(false), 500)
  }

  return (
    <div>
      <div className="iconsContainer">
        <Button onClick={() => onChoiceClick("scissors")} type="link">
          <FaHandScissors size={100} />
        </Button>
        <Button onClick={() => onChoiceClick("paper")} type="link">
          <FaHandPaper size={100} />
        </Button>
        <Button onClick={() => onChoiceClick("rock")} type="link">
          <FaHandRock size={100} />
        </Button>
      </div>
    </div>
  )
}
export default ChoicesCotainer
