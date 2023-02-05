import "./index.css"

function SearchPanel(props) {
    const { inputText, handleInputChange } = props;

    return <input className="search-panel__input" type="text" placeholder="Type to search..." value={inputText} onChange={(e) => handleInputChange(e.target.value)} />
}

export default SearchPanel