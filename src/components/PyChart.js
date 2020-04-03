import React from 'react'
import * as d3 from 'd3'

export default class PyChart extends React.Component {
  componentDidMount() {
    // D3 Code to create the chart
    // using this._rootNode as container
    //console.log('width', this._rootNode.node().getBoundingClientRect().width);
    var margin = {
      top: 20,
      right: 20,
      bottom: 80,
      left: 50
    }
    var width = 600 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom,
      width_all = width + margin.left + margin.right,
      height_all = height + margin.top + margin.bottom
    var colours = ['lightsteelblue', 'rgb(249, 93, 11)', '#BF215B'],
      colScale = d3.scaleOrdinal().range(colours)
    var svg = d3
      .select(this._rootNode)
      .append('svg')
      .attr('viewBox', `0 0 ${width_all} ${height_all}`)
      .attr('id', 'svg-viz')
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

    var x = d3
      .scaleBand()
      .rangeRound([0, width])
      .padding(0.1)

    var y = d3.scaleLinear().rangeRound([height, 0])

    var loading = true
    var spinner_width = 200
    var spinner_group = svg
      .append('g')
      .attr(
        'transform',
        'translate(' +
          (width_all / 2 - spinner_width / 2) +
          ',' +
          height_all / 2 +
          ')'
      )
      .attr('font-size', 10)

    var spinner = spinner_group
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 0)
      .attr('height', 10)
      .style('fill', 'red')

    spinner_group
      .append('text')
      .style('fill', 'white')
      .attr('dy', '1em')
      .text('Loading')

    var repeat = () => {
      spinner
        .attr('width', 0)
        .transition()
        .duration(1000)
        .attr('width', spinner_width)
        .transition()
        .duration(1000)
        .attr('width', 0)
        .on('end', () => {
          if (loading) {
            repeat()
          }
        })
    }

    repeat()

    d3.json('https://covidpy-rest.herokuapp.com/logistic').then(data => {
      spinner_group.style('opacity', 0)
      loading = false
      x.domain(data.dates.slice(0, -2))
      y.domain([0, d3.max(data.confirmed)])

      svg
        .append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('y', 0)
        .attr('x', -10)
        .attr('dy', '.35em')
        .attr('transform', 'rotate(-90)')
        .style('text-anchor', 'end')

      svg
        .append('g')
        .call(d3.axisLeft(y))
        .append('text')
        .attr('fill', '#000')
        .attr('transform', 'rotate(-90)')
        .attr('y', 6)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Casos')

      svg
        .selectAll('.bar')
        .data(data.confirmed)
        .enter()
        .append('rect')
        .attr('class', 'confirmed')
        .attr('x', (d, i) => x(data.dates[i]))
        .attr('y', d => y(d))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d))
        .style('fill', colours[0])
        .on('mouseover', (d, i) =>
          d3.select('#confirmed-' + i).style('opacity', 1)
        )
        .on('mouseout', (d, i) =>
          d3.select('#confirmed-' + i).style('opacity', 0)
        )

      // svg
      //   .selectAll('.bar')
      //   .data(data.projected)
      //   .enter()
      //   .append('rect')
      //   .attr('class', 'projected')
      //   .attr('x', (d, i) => x(data.dates[i]))
      //   .attr('y', d => y(d))
      //   .attr('width', x.bandwidth())
      //   .attr('height', d => height - y(d))
      //   .style('fill', colours['1'])
      //   .on('mouseover', (d, i) =>
      //     d3.select('#projected-' + i).style('opacity', 1)
      //   )
      //   .on('mouseout', (d, i) =>
      //     d3.select('#projected-' + i).style('opacity', 0)
      //   )

      // svg
      //   .append('path')
      //   .datum(data.estimate)
      //   .attr('fill', 'none')
      //   .attr('stroke', colours[2])
      //   .attr('stroke-width', 2.5)
      //   .attr(
      //     'd',
      //     d3
      //       .line()
      //       .x((d, i) => x(data.dates[i]) + x.bandwidth() / 2)
      //       .y(d => y(d))
      //   )

      svg
        .selectAll('.text')
        .attr('text-anchor', 'center')
        .data(data.confirmed)
        .enter()
        .append('text')
        .attr('id', (d, i) => (d > 0 ? 'confirmed-' + i : 'projected-' + i))
        .attr('x', (d, i) => x(data.dates[i]))
        .attr('y', (d, i) => (d > 0 ? y(d) : y(data.projected[i])) - 10)
        .text((d, i) => (d > 0 ? d : data.projected[i]))
        .style('opacity', 0)
        .style('fill', d => (d > 0 ? colours[0] : colours[1]))

      var legend = svg
        .append('g')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 15)
        //.attr("text-anchor", "end")
        .selectAll('g')
        //.data(['Casos Confirmados', 'Predicción', 'Modelo Logístico'])
        .data(['Casos Confirmados'])
        .enter()
        .append('g')
        .attr(
          'transform',
          (d, i) => 'translate(0,' + (i * 22 + height_all / 16) + ')'
        )

      legend
        .append('rect')
        .attr('x', 50)
        .attr('width', 19)
        .attr('height', 19)
        .attr('fill', colScale)

      legend
        .append('text')
        .attr('x', 73)
        .attr('y', 9.5)
        .attr('dy', '0.32em')
        .text(d => d)
    })
  }

  shouldComponentUpdate() {
    // Prevents component re-rendering
    return false
  }

  _setRef(componentNode) {
    this._rootNode = componentNode
  }

  render() {
    return (
      <div
        className="line-container"
        ref={this._setRef.bind(this)}
        height="600"
      />
    )
  }
}
