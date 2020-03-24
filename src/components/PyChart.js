import React, { PureComponent } from 'react'
import * as d3 from "d3";

var data = null

export default class PyChart extends React.Component {

    componentDidMount() {
        // D3 Code to create the chart
        // using this._rootNode as container
        var margin = {
              top: 20,
              right: 20,
              bottom: 80,
              left: 50
            };
        var width = 600 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;
        var svg = d3.select(this._rootNode).append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .attr('id', 'svg-viz')
          .append("g")
          .attr("transform", 
            "translate(" + margin.left + "," + margin.top + ")");;

        var x = d3.scaleBand()
          .rangeRound([0, width])
          .padding(0.1);

        var y = d3.scaleLinear()
          .rangeRound([height, 0]);

        d3.json('https://covidpy-rest.herokuapp.com/expanded')
          .then((data)=>{
            console.log('data', data);
            x.domain(data.map(function (d) {
              return d.date;
            }));
            y.domain([0, d3.max(data, function (d) {
              return Number(d.cum_cases);
            })]);
            
            svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr('y',0)
            .attr('x',-10)
            .attr("dy", ".35em")
            .attr("transform", "rotate(-90)")
            .style("text-anchor", "end");

            svg.append("g")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("fill", "#000")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Speed");

            svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) {
              return x(d.date);
            })
            .attr("y", function (d) {
              return y(Number(d.cum_cases));
            })
            .attr("width", x.bandwidth())
            .attr("height", function (d) {
              return height - y(Number(d.cum_cases));
            });
          });
        
    }

    shouldComponentUpdate() {
        // Prevents component re-rendering
        return false;
    }

    _setRef(componentNode) {
        this._rootNode = componentNode;
    }

    render() {
      return(
        <div className="line-container" ref={this._setRef.bind(this)} height="600"/>
      )
    }
}