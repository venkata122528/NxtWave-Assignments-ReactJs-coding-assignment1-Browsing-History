import './index.css'

const EachHistoryItem = props => {
  const {eachHistory, forDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const onDelete = () => {
    forDelete(title)
  }

  return (
    <li className="eachHistoryItem">
      <div className="timeWebDataContainer">
        <p className="timeEl">{timeAccessed}</p>
        <div className="webDataContainer">
          <img src={logoUrl} alt="domain logo" className="domainLogo" />
          <p className="domainNameEl">{title}</p>
          <p className="domainUrlEl">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        className="deleteButton"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="deleteImg"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default EachHistoryItem
