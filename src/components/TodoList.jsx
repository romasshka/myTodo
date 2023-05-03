import { List } from "@mui/material";
import { useSelector } from 'react-redux';
import TodoItem from "./mainPageParts/TodoItem";
import { Button } from "@mui/material";
const TodoList = () => {
    const { error, todos, status } = useSelector((state) => state.todos)


    return (

        <>
            {status === 'loading' && <h2>Loading...</h2>}

            {error ?
                <Button
                    variant="p"
                    component="p"
                >
                    {error}
                </Button>
                : null}

            {todos ?
                <List>
                    {todos.map((todo) =>
                        <TodoItem
                            todo={todo}

                            key={todo.id}
                            {...todo}
                        />
                    )}
                </List>
                : null}
        </>
    )
}
export default TodoList;