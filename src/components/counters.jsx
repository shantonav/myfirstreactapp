import React, {Component} from "react";
import Counter from "./counter";

class  Counters extends  Component{
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
        const newCounters = this.state.counters.filter( c => c.id != counter.id );
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
        newCounters[ targetCounterIndex ].value++;
        this.setState( {counters: newCounters });


    };
    handleCounterDecrement= ( counter ) => {
        console.log( "Inside handleCounterDecrement in Counters, " , counter );
        const newCounters = [...this.state.counters];
        const targetCounterIndex =  newCounters.indexOf( counter );
        console.log( "Target counter index=", targetCounterIndex);
        if ( newCounters [ targetCounterIndex ].value === 0 ) {
            console.log( "Cannot make the value negative ");
            return;
        }
        newCounters[ targetCounterIndex ].value--;
        this.setState( {counters: newCounters });

    };

    render (){
        return (
            <div>
                <button onClick={ this.handleReset } className="btn btn-primary btn-sm m-2">Reset</button>
                { this.state.counters.map( counter =>
                    <Counter key={ counter.id } data={ counter }
                             onDelete={ this.handleCounterDeleteEvent }
                             onCounterIncrement = { this.handleCounterIncrement }
                             onCounterDecrement = { this.handleCounterDecrement }>
                    </Counter>)
                }
            </div>
        );
    }
}

export  default  Counters;