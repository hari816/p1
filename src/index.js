import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Button from './components/button';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0
        };
        this.operation=this.operation.bind(this);
    }
    operation(term){
        let n=this.state.num;
        if(term==="sub" && n>0)
        {
            this.setState({num:n-1});
        }

        if(term==="add" && n<99)
        {
            this.setState({num:n+1});
        }
        if(term==="increase"){
            setInterval(()=>{
            { if(this.state.num<100)
                this.setState({num:this.state.num+1});
            }
        },500)

        }
        if(term==="decrease"){
            setInterval(()=>{
            { if(this.state.num>0)
                this.setState({num:this.state.num-1});
            }
        },500)
        }
    }



    render() {
        return (
            <div>
            <p>{this.state.num}</p>
        <Button sub={this.operation}/>
        </div>
    );
    }

}

ReactDOM.render(<App/>, document.querySelector('.   container'));