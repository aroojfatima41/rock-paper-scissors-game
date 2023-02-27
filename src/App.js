import "./App.css"
import ChoicesContainer from "./ChoicesContainer"
import LifeLinesContainer from "./LifelinesContainer"
import InputContainer from "./InputContainer"
import { useState } from "react"

const App = () => {
  const [userChoice, setUserChoice] = useState(undefined)
  const [loader, setLoader] = useState(true)

  return (
    <div className="root">
      <h1 className="App">Rock Paper scissor</h1>

      <LifeLinesContainer />
      {userChoice && <InputContainer userInput={userChoice} loader={loader} />}
      <ChoicesContainer setUserChoice={setUserChoice} setLoader={setLoader} />
    </div>
  )
}

export default App
