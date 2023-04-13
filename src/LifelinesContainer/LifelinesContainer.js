import "./LifelinesContainer.css"

const LifeLinesContainer = ({ playerScore, computerScore }) => {

  return (
    <div className="lifelinesContainer">
      <div className="lifelinesIconsContainer">
        <div>
          <h3>Player</h3>
          {playerScore}
        </div>
        <div>
          <h3>Computer</h3>
          {computerScore}
        </div>
      </div>
    </div>
  )
}

export default LifeLinesContainer
