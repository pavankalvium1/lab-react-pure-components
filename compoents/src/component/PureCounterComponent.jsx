import React, {PureComponent } from "react";

class PureCounterComponent extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0,
            toggle: false,
        }
    }

    toggling = () => {
        this.setState((bool) => ({ toggle: !bool.toggle }))
    }

    incrementCount = () => {
        if (this.state.toggle) {

            this.setState((prev) => ({ count: prev.count + 1 }))
        }
    }

    render() {

        let { count, toggle } = this.state
        console.log(toggle)
        console.log("This is Pure Component")

        var changeStyle = null;
        if(toggle){
            changeStyle ={
                backgroundColor : "green"
            }
        }else{
            changeStyle ={
                backgroundColor : "red"
            }
        }

        var changeButtonStyle = null;

        if(toggle){
            changeButtonStyle ={
                cursor : "pointer"
            }
        }else{
            changeButtonStyle ={
                cursor : "not-allowed"
            }
        }

        return (
            <>
            <h1>pure component</h1>
                <h3>count : {count}</h3>
                <button style={changeStyle} onClick={this.toggling}>Set toggle</button>
                <button style={changeButtonStyle} onClick={this.incrementCount}>counter</button>

            </>
        )
    }
}

export default PureCounterComponent;