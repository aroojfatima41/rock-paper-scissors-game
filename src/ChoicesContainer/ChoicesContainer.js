import { Button } from "antd"
import { FaHandScissors, FaHandRock, FaHandPaper } from "react-icons/fa"
import "./ChoicesContainer.css"

const ChoicesCotainer = ({ setUserChoice, setLoader, setMoves, moves, setComputerChoice }) => {
  const getComputerInput = () => {
    const generateRandomNumber = Math.floor(Math.random() * 101)
    return generateRandomNumber <= 33 ? "scissors" : generateRandomNumber <= 66 ? "rock" : "paper"
  }

  const onChoiceClick = (choice) => {
    if (moves !== 0) setMoves(moves - 1)
    setUserChoice(choice)
    setLoader(true)
    setTimeout(() => setLoader(false), 500)
    setComputerChoice(getComputerInput())
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
