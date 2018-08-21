import React, { Component } from 'react';
import { standardDate, fullMonthName, initialMonthName, distanceInWordsToNow, IDRFormatter, USDFormatter } from '../../helpers/textFormatter';

export default class TextFormatter extends Component {
  constructor() {
    super();
    this.state = {
      listData: [
        {
          data: '2018-08-20 20:00:00', functionName: 'standardDate()', action: standardDate('2018-08-20 20:00:00')
        },
        {
          data: '2018-08-20 20:00:00', functionName: 'fullMonthName()', action: fullMonthName('2018-08-20 20:00:00')
        },
        {
          data: '2018-08-20 20:00:00', functionName: 'initialMonthName()', action: initialMonthName('2018-08-20 20:00:00')
        },
        {
          data: '2018-08-20 20:00:00', functionName: 'distanceInWordsToNow()', action: distanceInWordsToNow('2018-08-20 20:00:00')
        },
        {
          data: '10000000', functionName: 'IDRFormatter()', action: IDRFormatter('10000000')
        },
        {
          data: '10000000', functionName: 'USDFormatter()', action: USDFormatter('10000000')
        }
      ]
    };
  }

  render() {
    const { listData } = this.state;
    return (
      <div>
        <h2>Text Formatter</h2>
        <p>This page contains Modal Rakyat standardized function for formatting data/time and text.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Formatter</th>
              <th scope="col">Before Formatter</th>
              <th scope="col">After Formatter</th>
            </tr>
          </thead>
          <tbody>
            { listData.map((value, index) =>
              (
                <tr key={value.action}>
                  <td>{index + 1}</td>
                  <td>{value.functionName}</td>
                  <td>{value.data}</td>
                  <td>{value.action}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
