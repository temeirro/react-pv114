import { createContext, useState } from "react";
export const CounterContext = createContext({
    count: 0,//getter
    decrement: () => null,
    increment: () => null,
    reset: () => null
});

export default function CounterProvider(props) {
    const [count, setCount] = useState(0);
    const decrement = () => { if (count > 0) return setCount(count - 1); };
    const increment = () => setCount(count + 1);
    const reset = () => setCount(0);
    const values = { count, decrement, increment, reset };
    return (
        <CounterContext.Provider value={values}>
            {props.children}
        </CounterContext.Provider>
    )
}
