import React, { useState } from "react"
import { Button, Card, CardContent, CardHeader, FormInput } from "semantic-ui-react"

interface Item {
    id: number,
    text: string,
    processed: boolean
}

export const TodoList: React.FC = () => {
    const [Todo, SetTodo] = useState<Item[]>([])
    const [Input, SetInput] = useState<string>("")

    const handleToggle = (id: number) => {
        SetTodo(
            Todo.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, processed: !todo.processed }
                }
                return todo
            })
        )
    }

    const handleClick = () => {
        const newOne: Item = { id: Date.now(), text: Input, processed: false }
        SetTodo([...Todo, newOne])
    }

    const handleClearAll = () => {
        SetTodo([]);
    }

    return (
        <div className="main-container">
            <Card style={{ width: "600px" }}>
                <CardHeader>
                    <h3 style={{ textAlign: "center" }}>To-Do List</h3>
                </CardHeader>

                <CardContent>
                    <ul>
                        {Todo.map((todo) => (
                            <li
                                key={todo.id}
                                onClick={() => handleToggle(todo.id)}
                                style={{ textDecoration: todo.processed ? "line-through" : "none" }}
                            >
                                {todo.text}
                            </li>
                        ))}
                    </ul>
                </CardContent>

                <FormInput
                    type="text"
                    placeholder="Add Todo Item"
                    onChange={(e) => SetInput(e.currentTarget.value)}
                />

                <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", marginLeft: "16px" }}>
                    <Button color="green" onClick={handleClick}>Add</Button>
                    {Todo.length > 0 && (
                        <Button color="red" onClick={handleClearAll} style={{ marginLeft: "10px" }}>Clear</Button>
                    )}
                </div>
            </Card>
        </div>
    )
}