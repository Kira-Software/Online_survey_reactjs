import React,  {Component,Fragment } from "react";

class Express extends Component {
    state = {
        data:[]
      }
componentDidMount(){
    fetch('/').then(res => res.json).then(data => this.setState({data}));
    console.log("the value of data now is",this.state.data);

}

    render() { 
        return ( 
            <Fragment>
                <h2>hellow there....today we are gonna see how react can integrate with express api</h2>
            </Fragment>

         );
    }
}
 
export default Express;