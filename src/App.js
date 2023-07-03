import "./App.css"
import ChoicesContainer from "./ChoicesContainer"
import LifeLinesContainer from "./LifelinesContainer"
import InputContainer from "./InputContainer"
import { useState } from "react"

const App = () => {
  const [userChoice, setUserChoice] = useState(undefined)
  const [loader, setLoader] = useState(true)
  const [computerChoice, setComputerChoice] = useState(undefined)
  const [moves, setMoves] = useState(10)
  const [computerScore, setComputerScore] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)
  const [result, setResult] = useState("")

  const getComputerInput = () => {
    const generateRandomNumber = Math.floor(Math.random() * 101)
    return generateRandomNumber <= 33 ? "scissors" : generateRandomNumber <= 66 ? "rock" : "paper"
  }
  console.log(playerScore, computerScore)

  const decision = (userChoice) => {
    const computerChoice = getComputerInput()
    setComputerChoice(computerChoice)
    if (userChoice === computerChoice) {
      setResult("Tie")
    } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        setResult("Computer Won")
        setComputerScore(computerScore + 1)
      } else {
        setResult("Player Won")
        setPlayerScore(playerScore + 1)
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        setResult("Computer Won")
        setComputerScore(computerScore + 1)
      } else {
        setResult("Player Won")
        setPlayerScore(playerScore + 1)
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        setResult("Computer Won")
        setComputerScore(computerScore + 1)
      } else {
        setResult("Player Won")
        setPlayerScore(playerScore + 1)
      }
    }
  }

  return (
    <div className="root">
      <h1 className="App">Rock Paper Scissor</h1>

      <LifeLinesContainer playerScore={playerScore} computerScore={computerScore} />

      {userChoice && computerChoice && (
        <InputContainer userInput={userChoice} loader={loader} computerChoice={computerChoice} />
      )}

      <p>Moves Left {moves}</p>

      {moves !== 0 && (
        <ChoicesContainer
          setUserChoice={setUserChoice}
          setLoader={setLoader}
          setMoves={setMoves}
          moves={moves}
          onClick={decision}
        />
      )}

      {moves !== 0 && !loader && userChoice && computerChoice && <h1>{result}</h1>}

      {moves === 0 && <h1>Game Over</h1>}
      {moves === 0 && (
        <h1>
          {playerScore > computerScore
            ? "Congratulations! You Won"
            : playerScore === computerScore
            ? "It's a tie"
            : "Computer Won"}
        </h1>
      )}
      {moves === 0 && (
        <button
          onClick={() => {
            setMoves(10)
            setPlayerScore(0)
            setComputerScore(0)
            setComputerChoice(undefined)
            setUserChoice(undefined)
          }}
          className="restartButton"
        >
          Restart Game
        </button>
      )}
    </div>
  )
}

export default App
