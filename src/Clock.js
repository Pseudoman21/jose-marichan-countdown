import React, { Component } from 'react'

class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  componentWillMount () {
    this.getTimeUntil(this.props.deadline)
  }
  componentDidMount () {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }
  leading0 (num) {
    return num < 10 ? '0' + num : num
  }
  getTimeUntil (deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date())
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    } else {
      const seconds = Math.floor((time / 1000) % 60)
      const minutes = Math.floor((time / 1000 / 60) % 60)
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
      const days = Math.floor(time / (1000 * 60 * 60 * 24))
      this.setState({ days, hours, minutes, seconds })
    }
  }
  render () {
    if (
      this.state.days === 0 &&
      this.state.hours === 0 &&
      this.state.minutes === 0 &&
      this.state.seconds === 0
    ) {
      return (
        <div>
          Yays! Merry Christmas! Kantahan na! <br />- Jose Mari Chan
        </div>
      )
    } else {
      return (
        <div>
          <div className='Clock-days'>
            {this.leading0(this.state.days)} Day{this.state.days === 1 ? '': 's'}
          </div>
          <div className='Clock-hours'>
            {this.leading0(this.state.hours)}:
            {this.leading0(this.state.minutes)}:
            {this.leading0(this.state.seconds)}
          </div>
        </div>
      )
    }
  }
}
export default Clock
