import "./App.css"
import ChoicesContainer from "./ChoicesContainer"
import LifeLinesContainer from "./LifelinesContainer"
import InputContainer from "./InputContainer"
import { useState } from "react"

const App = () => {
  const [userChoice, setUserChoice] = useState(undefined)

  return (
    <div className="root">
      <h1 className="App">Rock Paper scissor</h1>

      <LifeLinesContainer />
      {userChoice && <InputContainer userInput={userChoice} />}
      <ChoicesContainer setUserChoice={setUserChoice} />
    </div>
  )
}

export default App
