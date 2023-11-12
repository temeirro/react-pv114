import { Button, Stack } from "@mui/material"
import { useContext } from "react"
import { CounterContext } from "../contexts/counterContextWithReducer"
import Box from "@mui/material";

export default function Counter(){

    const {count, title, increment, decrement, reset}= useContext(CounterContext);
    return(
        <>
        <Stack spacing={2}  alignItems="center">
            <h2>Counter Manager</h2>
            <h3>{title} {count}</h3>
            <Stack>
                <Button  variant="contained" onClick={increment}>Increment</Button>
                <Button variant="contained" color="success" onClick={decrement}>Decrement</Button>
                <Button variant="contained"  color="error" onClick={reset}>Clear</Button>
            </Stack>
        </Stack>
        </>
    )
}