import React from 'react'
import * as d3 from 'd3'

export default class AlignmentChart extends React.Component {
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
    var countries = ['Paraguay', 'Argentina', 'Brasil', 'Bolivia', 'Brazil']
    var colours = ['#F78378', '#5CCEEA', '#ffc107', '#CEE164'],
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
          if (loading) repeat()
        })
    }

    repeat()

    //d3.json('http://127.0.0.1:5000/alignment') // to test
    d3.json('https://covidpy-rest.herokuapp.com/alignment').then(res_data => {
      var data = []
      var all_dates = new Set()
      for (var i = res_data.country_data.length - 1; i >= 0; i--) {
        var country = res_data.country_data[i]
        if (countries.indexOf(country.name) >= 0) {
          data.push(country)
          for (var j = country.data.length - 1; j >= 0; j--) {
            all_dates.add(country.data[j].date)
            all_dates.add(country.data[j].date_offset)
          }
        }
      }
      all_dates = Array.from(all_dates).sort()
      spinner_group.style('opacity', 0)
      loading = false
      x.domain(all_dates)
      y.domain([
        0,
        d3.max(
          data.map((c, i) => {
            return c.data[c.data.length - 1].y
          })
        )
      ])

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
        .attr('x', 0)
        .attr('dy', '1.8em')
        .attr('text-anchor', 'end')
        .text('Casos Confirmados')

      var add_line = (country, idx) => {
        svg
          .append('path')
          .attr('class', 'countryLine_' + idx)
          .datum(country.data)
          .attr('fill', 'none')
          .attr('stroke', colours[idx])
          .attr('stroke-width', 2.5)
          .attr(
            'd',
            d3
              .line()
              .x(d => x(d.date))
              .y(d => y(d.y))
          )
      }

      for (var ii = data.length - 1; ii >= 0; ii--) {
        add_line(data[ii], ii)
      }

      var aligned = false
      var toggle_align = () => {
        for (var i = data.length - 1; i >= 0; i--) {
          var country = data[i]
          svg
            .selectAll('.countryLine_' + i)
            .datum(country.data)
            .transition()
            .duration(1000)
            .attr(
              'd',
              d3
                .line()
                .x(d => {
                  if (!aligned) {
                    return x(d.date_offset)
                  } else {
                    return x(d.date)
                  }
                })
                .y(d => y(d.y))
            )
        }
        aligned = !aligned
        d3.select('#align').html(aligned ? 'Restaurar' : 'Alinear Curvas')
        legends
          .transition()
          .duration(1000)
          .text(d =>
            aligned
              ? d.name + ' (' + d.offset + ' días atrás de Brasil)'
              : d.name
          )
      }

      d3.selectAll('#align').on('click', toggle_align)

      var legend = svg
        .append('g')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 15)
        //.attr("text-anchor", "end")
        .selectAll('g')
        .data(data.map(c => c))
        .enter()
        .append('g')
        .attr(
          'transform',
          (d, i) => 'translate(0,' + (i * 22 + height_all / 32) + ')'
        )

      legend
        .append('rect')
        .attr('x', 50)
        .attr('width', 19)
        .attr('height', 19)
        .attr('fill', (d, i) => colScale(i))

      var legends = legend
        .append('text')
        .attr('x', 73)
        .attr('y', 9.5)
        .attr('dy', '0.32em')
        .text(d => d.name)
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
      <>
        <div
          className="line-container"
          ref={this._setRef.bind(this)}
          height="600"
        />
        <button className="btn btn-primary" id="align">
          Alinear Curvas
        </button>
      </>
    )
  }
}
