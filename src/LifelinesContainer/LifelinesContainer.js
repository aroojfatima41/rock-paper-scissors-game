import { FaHeart } from "react-icons/fa"
import "./LifelinesContainer.css"

function LifeLinesContainer() {
  return (
    <div className="lifelinesContainer">
      <h1 className="lifelinesHeading">LifeLines</h1>
      <div className="iconsContainer">
        <div>
          <FaHeart size={100} />
          <h3>Player</h3>
        </div>
        <div>
          <FaHeart size={100} />
          <h3>Computer</h3>
        </div>
      </div>
    </div>
  )
}

export default LifeLinesContainer
