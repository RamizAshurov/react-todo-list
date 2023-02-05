import "./index.css"

function TodoList(props) {
    const { todos, makeImportant, makeComplete, deleteTodoItem } = props;

    return (
        <div className="todo-list">
            { todos.length === 0 
                ? <p>There is no to do...</p>
                : (
                    todos.map(todoItem => {
                        const { label, complete, important } = todoItem;
                        let classString = "todo-item";
                        classString += important ? " todo-item_important" : "";
                        classString += complete ? " todo-item_complete" : ""
                        return (
                            <div key={todoItem.label} className={classString}>
                                <span className="todo-item__label" onClick={() => makeImportant(label)}>{todoItem.label}</span>
                                <div className="todo-item__icons-container">
                                <i className="todo-item__icon bi bi-check-lg" onClick={() => makeComplete(label)}/>
                                <i className="todo-item__icon bi bi-trash" onClick={() => deleteTodoItem(label)} />
                                </div>
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}

export default TodoList