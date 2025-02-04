// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  IncreaseMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  IncreaseBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="Container">
        <div className="Sub-Container">
          <h1 className="heading">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="image-Container">
            <div className="mango">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="Mango"
                className="image"
              />
              <button
                type="button"
                className="btn"
                onClick={this.IncreaseMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="mango">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="Banana"
                className="image"
              />
              <button
                type="button"
                className="btn"
                onClick={this.IncreaseBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
