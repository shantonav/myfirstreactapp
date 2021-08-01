import React, {Component} from "react";


class Counter extends Component{
    state = {
        value: this.props.data.value ,
        products: [
            {
                id: 1,
                name: "prod1",
                qty: 0
            },
            {
                id: 2,
                name: "prod2",
                qty: 0
            }
        ],
        tags: ["tag1", "tags2", "tags3"],
        localData: this.props.data
    };

   /* constructor() {
        super();
        console.log( "Inside constructoe", this );

        this.handleCount = this.handleCount.bind( this );
    }*/
    handleDecrementCount = () => {
        if ( this.state.value === 0 ) {
            console.log( "Count already zero cannot make it negative ");
            return;
        }
        this.setState({ value: this.state.value - 1  });
        this.setState({ localData: {value: this.state.localData.value - 1, id: this.props.data.id }  });
    };

    /**
     * { this.state.tags.length === 0 && <p>Please create a new tag</p> }
     { this.renderTags() }
     * @returns {JSX.Element}
     */
    render() {
        console.log( this.props );
        return (
            <div id={ this.props.data.id }>
                { this.props.children }
                <span className={ this.determineClass() }>{this.formatCount() }</span>
                <button onClick={ () => this.props.onCounterIncrement ( this.props.data  )  } className="btn btn-secondary btn-sm m-2">+</button>
                <button onClick={ () => this.props.onCounterDecrement ( this.props.data  )  } className="btn btn-secondary btn-sm m-2">-</button>
                <button onClick={ () => this.props.onDelete (this.props.data ) }  className="btn btn-danger m-2">Delete</button>

            </div>
        );
    }

    /**
    * Arrow functions inherit the object of the component class.
    * Because <button onClick={ this.handleCount  } ...
    * here, this.handleCount is passed as a function object
    * and the arrow function in the component class
    * defines what the function object should do.
    * In  that way, it inherits the object of the component itself.
     * If this feature breaks, then use the event binder in constructor above.
     */
    handleIncrementCount = ( product  ) => {
        console.log( "Product ", product);
        this.setState({ value: this.state.value + 1  });
        this.setState({ localData: {value: this.state.localData.value + 1, id: this.props.data.id}  });
    }


   /* renderProducts() {
        if ( this.state.products.length === 0 ) return <p> There are no products</p>;

        return (

            this.state.products.map( prod =>  {
                <span className={this.determineClass()}>{ prod.name }</span>
                <span className={this.determineClass()}>{this.formatProdQty( prod )}</span>
                <button onClick={() => this.handleIncrementCount ( prod )} className="btn btn-secondary btn-sm m-2">+</button>
                <button onClick={this.handleDecrementCount} className="btn btn-secondary btn-sm m-2">-</button>
            });

        );

    }*/

    renderTags() {
        if (this.state.tags.length === 0 ) return <p>There are no tags !!</p>;

        return (
            <ul>
                { this.state.tags.map( tag => <li key={tag} id={ tag }> { tag }</li> ) }
            </ul>
        );
    }

    determineClass() {
        let classes = "badge m-2 badge-";
        classes += this.props.data.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.data;
        return value === 0 ? 'Zero' : value ;
    }
}

export default  Counter;
