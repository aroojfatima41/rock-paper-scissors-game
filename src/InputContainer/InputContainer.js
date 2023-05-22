import ComputerInput from "../ComputerInput"
import { FaHandScissors, FaHandRock, FaHandPaper } from "react-icons/fa"
import { Spin } from "antd"
import "./InputContainer.css"

const InputContainer = ({ userInput, loader, computerChoice }) => {
  return (
    <div className="inputWrapper">
      {userInput && (
        <div className="choosenItem">
          <h3>Player Choice</h3>
          {loader && <Spin />}
          <div>
            {!loader && userInput === "scissors" && <FaHandScissors size={100} />}
            {!loader && userInput === "paper" && <FaHandPaper size={100} />}
            {!loader && userInput === "rock" && <FaHandRock size={100} />}
          </div>
        </div>
      )}
      {userInput && (
        <div className="choosenItem">
          <h3>Computer Choice</h3>
          {loader && <Spin />}
          {!loader && <ComputerInput computersChoice={computerChoice} />}
        </div>
      )}
    </div>
  )
}

export default InputContainer
