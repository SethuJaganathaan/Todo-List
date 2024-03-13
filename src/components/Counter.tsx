import { useState } from "react"
import { Button, Card, CardContent, CardHeader } from "semantic-ui-react"

export default function Counter() {
    const [counter, SetCounter] = useState(0)

    const handleCountP = () => {
        SetCounter(counter + 1);
    }

    const handleCountN = () => {
        SetCounter(counter - 1);
    }

    return (
        <Card style={{ marginTop: '60px' }}>
            <CardHeader>
                Counter
            </CardHeader>
            <Button>{counter}</Button>
            <CardContent>
                <Button onClick={handleCountP} color="green">Count +</Button>
                <Button onClick={handleCountN} color="red">Count -</Button>
                <Button onClick={() => SetCounter(0)} color="yellow">Reset</Button>
            </CardContent>
        </Card>
    )
}