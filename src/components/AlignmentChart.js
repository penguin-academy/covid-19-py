import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

var data = null

export default class AlignmentChart extends PureComponent {
  // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/'

  constructor() {
    super()
    this.state = {
      data: [],
      loaded: false,
      colours: [
        '#F78378',
        '#FB8599',
        '#F18FBA',
        '#DA9FD6',
        '#B7B0EA',
        '#8BC1F1',
        '#5CCEEA',
        '#3BD9D7',
        '#4AE0BB',
        '#73E49B',
        '#A0E57C',
        '#CEE164'
      ]
    }
  }

  componentDidMount() {
    fetch('https://penguin-utility-server.herokuapp.com/covid19/alignment.json')
      .then(response => response.json())
      .then(jsonData => {
        // jsonData is parsed json object received from url
        this.setState({ data: jsonData })
        this.setState({ loaded: true })
      })
      .catch(error => {
        // handle your errors here
        console.error(error)
      })
  }

  render() {
    if (this.state.loaded == false)
      return (
        <h2 className="text-center m-5">
          <i className="fas fa-spinner fa-pulse mr-3"></i>
          loading...
        </h2>
      )
    else
      return (
        <div style={{ width: '100%', height: 450 }}>
          <ResponsiveContainer>
            <LineChart
              data={this.state.data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="x"
                type="number"
                allowDuplicatedCategory={false}
              />
              <YAxis dataKey="y" type="number" />
              <Tooltip />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="top"
                wrapperStyle={{ marginRight: '-10px' }}
              />
              {this.state.data.country_data.map((s, i) => (
                <Line
                  dataKey="y"
                  dot={false}
                  data={s.data}
                  name={s.name + ' (' + s.offset + ' detrás de Brasil)'}
                  stroke={this.state.colours[i]}
                  key={s.name}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )
  }
}
