import React, { PropTypes } from 'react'
import HistoryStore from '../stores/HistoryStore'
class HistoryList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      histories: HistoryStore.getHistories()
    }
  }

  componentDidMount() {
    this.storeToken = HistoryStore.addListener(this.onStoreUpdate.bind(this));
  }

  componentWillUnmount() {
    this.storeToken.remove();
  }

  onStoreUpdate() {
    this.setState({
      histories: HistoryStore.getHistories()
    })
  }

  render () {
    return (
      <ul>
        {
          this.state.histories.map( (historyText, i) => {
            return <li key={i}>{historyText}</li>;
          })
        }
      </ul>
    )

  }
}

export default HistoryList;
