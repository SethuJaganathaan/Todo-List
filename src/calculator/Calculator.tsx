import React, { useState } from 'react';
import { Button, Card, CardContent, Container, FormInput } from 'semantic-ui-react';

const Calculator: React.FC = () => {
    const [result, setResult] = useState<string>('');

    const handleClick = (value: string) => {
        if (value === '=') {
            try {
                setResult(eval(result));
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setResult('');
        } else {
            setResult(prevResult => prevResult + value);
        }
    };

    return (
        <Container style={{ marginTop: "4em" }}>
            <Card>
                <FormInput type="text" value={result} readOnly />
                <CardContent>
                    {[...Array(10).keys()].map(num => (
                        <Button key={num} onClick={() => handleClick(num.toString())}>
                            {num}
                        </Button>
                    ))}
                    {['+', '-', '*', '/', '='].map(op => (
                        <Button key={op} onClick={() => handleClick(op)}>
                            {op}
                        </Button>
                    ))}
                    <Button onClick={() => handleClick('.')}>.</Button>
                    <Button onClick={() => handleClick('C')}>C</Button>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Calculator;

