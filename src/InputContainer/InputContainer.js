import ComputerInput from "../ComputerInput"
import { FaHandScissors, FaHandRock, FaHandPaper } from "react-icons/fa"

const InputContainer = ({ userInput }) => {
  return (
    <div>
      {userInput && (
        <>
          <h1>Computer</h1> <ComputerInput />
        </>
      )}
      {userInput && (
        <div>
          <h1>Player</h1>
          {userInput === "scissors" && <FaHandScissors size={100} />}
          {userInput === "paper" && <FaHandPaper size={100} />}
          {userInput === "rock" && <FaHandRock size={100} />}
        </div>
      )}
    </div>
  )
}

export default InputContainer
