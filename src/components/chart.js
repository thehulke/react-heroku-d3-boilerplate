import React, {PropTypes} from 'react';
import chartReducer from '../reducers/chartReducer';
import d3 from 'd3';

const Chart = React.createClass({
    getInitialState() {
        return this.stateFromStore();
    },

    stateFromStore() {
        let state = chartReducer.store.getState();
        if (state.chartData) {
            this.buildChart(state.chartData)
        }

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

    //#TODO: Build the Chartin the buildChart function
    buildChart(data) {
        console.log('Building Chart With d3');
        let rule = d3.scale.linear()
        .domain([0,d3.max(data)])
        .range([0, 420]);

        let wrapper = d3.select(".chart-wrapper")
        .selectAll('div')
        .data(data)
        .enter().append('div')
        .style('width', function(d){
          return rule(d) + 'px';
        })
        .text(function(d){
          return d;
        })




        //Work In Progress
    },
    dispatchAsyncAction() {
        return chartReducer.store.dispatch(chartReducer.actions.get_data_action());
    },

    render() {
        console.log('%c Chart State: ', 'background: lightgreen;', this.state);
        return (
            <div className="chart-wrapper">
                <p>Chart Goes Here</p>
                <button onClick={this.dispatchAsyncAction}>Click To Test</button>
            </div>
        )
    }
})

export default Chart
