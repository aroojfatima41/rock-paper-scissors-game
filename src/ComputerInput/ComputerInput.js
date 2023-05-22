import { FaHandScissors, FaHandRock, FaHandPaper } from "react-icons/fa"

const ComputerInput = ({ computersChoice }) => {
  return (
    <div className="iconsContainer">
      {computersChoice === "scissors" && <FaHandScissors size={100} />}
      {computersChoice === "paper" && <FaHandPaper size={100} />}
      {computersChoice === "rock" && <FaHandRock size={100} />}
    </div>
  )
}
export default ComputerInput
