import { useState } from "react"
import { useEffect } from "react"

const Winner = ({ player, computer, playerScore, computerScore, setComputerScore, setPlayerScore }) => {
  const [result, setResult] = useState("")

  useEffect(() => {
    if (player === computer) {
      setResult("Tie")
    } else if (player === "rock") {
      if (computer === "paper") {
        setResult("Computer Won")
        setComputerScore(computerScore++)
      } else {
        setResult("Player Won")
        setPlayerScore(playerScore++)
      }
    } else if (player === "scissors") {
      if (computer === "rock") {
        setResult("Computer Won")
        setComputerScore(computerScore++)
      } else {
        setResult("Player Won")
        setPlayerScore(playerScore++)
      }
    } else if (player === "paper") {
      if (computer === "scissors") {
        setResult("Computer Won")
        setComputerScore(computerScore++)
      } else {
        setResult("Player Won")
        setPlayerScore(playerScore++)
      }
    }
  }, [computer, computerScore, player, playerScore, setComputerScore, setPlayerScore])

  return <h1>{result}</h1>
}

export default Winner
