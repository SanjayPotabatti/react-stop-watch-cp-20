// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timerValue: 0}

  updateFunction = () => {
    this.setState(prevState => ({
      timerValue: prevState.timerValue + 1,
    }))
  }

  onClickStart = () => {
    console.log('start')
    this.timeId = setInterval(this.updateFunction, 1000)
  }

  onClickStop = () => {
    console.log('stop')
    clearInterval(this.timeId)
  }

  onClickRestart = () => {
    console.log('restart')
    clearInterval(this.timeId)
    this.setState({timerValue: 0})
  }

  timerFunction = () => {
    const {timerValue} = this.state
    const timeInMin = Math.floor(timerValue / 60)
    const timeInSec = Math.floor(timerValue % 60)
    const timeInMinString = timeInMin > 9 ? timeInMin : `0${timeInMin}`
    const timeInSecString = timeInSec > 9 ? timeInSec : `0${timeInSec}`

    return (
      <h1>
        {timeInMinString}:{timeInSecString}
      </h1>
    )
  }

  render() {
    const {timerValue} = this.state

    return (
      <div className="bgContainer">
        <div className="cardContainer">
          <h1 className="heading">Stopwatch</h1>
          <div className="smallCard">
            <div className="imgTimer">
              <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" />
              <p className="timerPara">Timer</p>
            </div>
            {this.timerFunction()}
            <div className="buttonContainer">
              <button
                type="button"
                className="btn btn-success"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                type="button"
                className="btn btn-danger m-1"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn btn-warning"
                onClick={this.onClickRestart}
              >
                Restart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
