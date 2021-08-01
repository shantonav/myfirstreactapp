import React, {Component} from "react";
import './App.css';
import NavBar from "./components/navbar";
import Counters from "./components/counters";


class App extends  Component{

    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 5},
            {id: 3, value: 1},
            {id: 14, value: 0},
        ]
    }

    handleCounterDeleteEvent = ( counter ) => {
        console.log( "Modified counter data", counter)
        const newCounters = this.state.counters.filter( c => c.id !== counter.id );
        this.setState( { counters: newCounters });
    }
    handleReset = () => {
        const  resetCounters = this.state.counters.map( c => {
            c.value = 0 ;
            return c;
        })

        this.setState( { counters: resetCounters });
    };
    handleCounterIncrement = ( counter ) => {
        console.log( "Inside handleCounterIncrement in Counters, " , counter );

        const newCounters = [...this.state.counters];
        const targetCounterIndex =  newCounters.indexOf( counter );
        console.log( "Target counter index =", targetCounterIndex);
        newCounters[targetCounterIndex].value++;
        this.setState( {counters: newCounters });


    };
    handleCounterDecrement= ( counter ) => {
        console.log( "Inside handleCounterDecrement in Counters, " , counter );
        const newCounters = [...this.state.counters];
        const targetCounterIndex =  newCounters.indexOf( counter );
        console.log( "Target counter index=", targetCounterIndex);
        if ( newCounters[targetCounterIndex].value === 0 ) {
            console.log( "Cannot make the value negative ");
            return;
        }
        newCounters[targetCounterIndex].value--;
        this.setState( {counters: newCounters });

    };

  render() {
    return (
        <React.Fragment>
          <NavBar counters = { this.state.counters }/>
          <main className="container">
            <Counters
                counters = { this.state.counters }
                onIncrement={ this.handleCounterIncrement }
                onDecrement={ this.handleCounterDecrement }
                onDelete={ this.handleCounterDeleteEvent }
                onReset={ this.handleReset }/>
          </main>
        </React.Fragment>
    );
  }
}

export default App;
