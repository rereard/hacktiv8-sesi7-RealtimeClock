import React, { Component } from 'react'
class Class extends Component {
    constructor(){
        super()
        this.state ={
            date: new Date()
        }
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    componentDidMount(){
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    render(){
        return(
            <>
                <h1>Realtime Class CLOCK</h1>
                <hr />
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </>
        )
    }
}
export default Class