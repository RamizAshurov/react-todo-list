import "./index.css"

function StatusFilter(props) {
    const { activeFilter, handleToggleProperty  } = props;

    return (
        <div className="filter">
            {
                ["all", "important", "complete"].map(propertyName => {
                    let classProperty = `filter__item filter__item_value_${propertyName}`
                    propertyName === activeFilter && ( classProperty += " " +  " filter__item_active" )
                    return (
                        <div 
                            key={propertyName}
                            className={classProperty}
                            onClick={() => handleToggleProperty(propertyName)}
                        >{propertyName}</div>
                    )
                })
            }
        </div>
    )
}

export default StatusFilter