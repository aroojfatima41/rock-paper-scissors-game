import { FaHandScissors, FaHandRock, FaHandPaper } from "react-icons/fa"

const ComputerInput = ({ setComputerChoice }) => {
  const generateRandomNumber = Math.floor(Math.random() * 101)
  const computersChoice = generateRandomNumber <= 33 ? "scissors" : generateRandomNumber <= 66 ? "rock" : "paper"
  setComputerChoice(computersChoice)

  return (
    <div className="iconsContainer">
      {computersChoice === "scissors" && <FaHandScissors size={100} />}
      {computersChoice === "paper" && <FaHandPaper size={100} />}
      {computersChoice === "rock" && <FaHandRock size={100} />}
    </div>
  )
}
export default ComputerInput
