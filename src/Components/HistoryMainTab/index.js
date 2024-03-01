import {Component} from 'react'
import './index.css'
import EachHistoryItem from '../EachHistoryItem/index'

class HistoryMainTab extends Component {
  state = {searchInput: '', deleteTitle: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  onDeleteClick = title => {
    this.setState({deleteTitle: title})
  }

  render() {
    const {historyList} = this.props
    const {searchInput, deleteTitle} = this.state
    const historyCopy = [...historyList]
    historyCopy.forEach((each, index) => {
      if (each.title === deleteTitle) {
        historyList.splice(index, 1)
      }
    })
    const searchedHistoryList = historyList.filter(each =>
      each.title.toLowerCase().includes(searchInput),
    )

    return (
      <div className="mainContainer">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="historyImg"
            alt="app logo"
          />
          <div className="searchBarContainer">
            <label htmlFor="input" className="label">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                className="searchImg"
                alt="search"
              />
            </label>
            <input
              type="search"
              className="inputEl"
              id="input"
              placeholder="Search history"
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <div className="eachHistoryContainer">
          <ul className="historyCard">
            {searchedHistoryList.length !== 0 ? (
              searchedHistoryList.map(eachHistoryItem => (
                <EachHistoryItem
                  eachHistory={eachHistoryItem}
                  key={eachHistoryItem.id}
                  forDelete={this.onDeleteClick}
                />
              ))
            ) : (
              <p className="result">There is no history to show</p>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default HistoryMainTab
