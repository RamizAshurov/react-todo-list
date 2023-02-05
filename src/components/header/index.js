import "./index.css"

function Header(props) {
    const { todoAmount, completeAmount } = props;

    return (
        <div className="header">
            <h1 className="header__title">Todo List</h1>
            <div className="header__stats">
                {
                    todoAmount === 0
                    ? <span>Everything is done!</span>
                    : (
                        <>
                            <span className="header__stats-item">{todoAmount} items to do</span>,
                            <span className="header__stats-item">{completeAmount} items done</span>
                        </>
                    )
                }

            </div>
        </div>
    )
}

export default Header