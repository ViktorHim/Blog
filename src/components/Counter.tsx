import { useState } from "react"
import cls from "./Counter.module.scss";

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

  return (
    <>
      <button onClick={decrement}>-</button>
      <div className={cls.gg}>{count}</div>
      <button onClick={increment}>+</button>
    </>
  )
}

export default Counter