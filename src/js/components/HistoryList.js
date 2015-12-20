import React, { PropTypes } from 'react'

class HistoryList extends React.Component {
  render () {
    return (
      <ul>
        { this.props.histories.map( (historyText) => <li>{historyText}</li> ) }
      </ul>
    )

  }
}

export default HistoryList;
