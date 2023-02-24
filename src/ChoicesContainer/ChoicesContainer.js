import { Button } from "antd"
import { FaHandScissors, FaHandRock, FaHandPaper } from "react-icons/fa"
import "./ChoicesContainer.css"

const ChoicesCotainer = ({ setUserChoice }) => {
  return (
    <div>
      <div className="iconsContainer">
        <Button
          onClick={() => {
            console.log("Scissors clicked")
            setUserChoice("scissors")
          }}
          type="link"
        >
          <FaHandScissors size={100} />
        </Button>
        <Button
          onClick={() => {
            console.log("Paper clicked")
            setUserChoice("paper")
          }}
          type="link"
        >
          <FaHandPaper size={100} />
        </Button>
        <Button
          onClick={() => {
            console.log("Rock clicked")
            setUserChoice("rock")
          }}
          type="link"
        >
          <FaHandRock size={100} />
        </Button>
      </div>
    </div>
  )
}
export default ChoicesCotainer
