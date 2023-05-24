import "./App.css"
import ChoicesContainer from "./ChoicesContainer"
import LifeLinesContainer from "./LifelinesContainer"
import InputContainer from "./InputContainer"
import Winner from "./Winner"
import { useState } from "react"

const App = () => {
  const [userChoice, setUserChoice] = useState(undefined)
  const [loader, setLoader] = useState(true)
  const [computerChoice, setComputerChoice] = useState(undefined)
  const [moves, setMoves] = useState(10)
  const [computerScore, setComputerScore] = useState(0)
  const [playerScore, setPlayerScore] = useState(0)

  return (
    <div className="root">
      <h1 className="App">Rock Paper Scissor</h1>

      <LifeLinesContainer playerScore={playerScore} computerScore={computerScore} />

      {userChoice && <InputContainer userInput={userChoice} loader={loader} computerChoice={computerChoice} />}

      <p>Moves Left {moves}</p>

      {moves !== 0 && (
        <ChoicesContainer
          setUserChoice={setUserChoice}
          setLoader={setLoader}
          setMoves={setMoves}
          moves={moves}
          setComputerChoice={setComputerChoice}
        />
      )}

      {moves !== 0 && !loader && userChoice && computerChoice && (
        <Winner
          player={userChoice}
          computer={computerChoice}
          playerScore={playerScore}
          computerScore={computerScore}
          setComputerScore={setComputerScore}
          setPlayerScore={setPlayerScore}
        />
      )}

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
