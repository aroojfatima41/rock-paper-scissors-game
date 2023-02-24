import { FaHeart } from "react-icons/fa"
import "./LifelinesContainer.css"

function LifeLinesContainer() {
  return (
    <div className="lifelinesContainer">
      <h3>LifeLines</h3>
      <div className="iconsContainer">
        <FaHeart size={100} />
        <FaHeart size={100} />
      </div>
    </div>
  )
}

export default LifeLinesContainer
