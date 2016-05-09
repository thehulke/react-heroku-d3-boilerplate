import React, { PropTypes } from 'react';
import chartReducer from '../reducers/chartReducer';

const Chart = React.createClass({
  getInitialState(){
    return this.stateFromStore();
  },

  stateFromStore() {
    let state = chartReducer.store.getState();
    return state
  },

  componentDidMount() {
   this.unsubscribe = chartReducer.store.subscribe(() => {
     this.setState(this.stateFromStore());
   }).bind(this);
 },

 componentWillUnmount() {
   this.unsubscribe();
 },

dispatchAsyncAction(){
  return chartReducer.store.dispatch(chartReducer.actions.get_data_action());
},

  render () {
    console.log(this.state);
    return (
     <div className="chart-wrapper">
       <p>Chart Goes Here</p>
       <button onClick={this.dispatchAsyncAction}>Click To Test</button>
     </div>
    )
  }
})

export default Chart
