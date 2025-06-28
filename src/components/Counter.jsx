import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="d-flex align-items-center justify-content-center my-3">
      <button className="btn btn-outline-primary mx-3"
        onClick={() => setCount(count - 1)} > - </button>
      <span className="mx-2 fs-5">{count}</span>
      <button className="btn btn-outline-primary mx-3"
        onClick={() => setCount(count + 1)} > + </button>
      <button className="btn btn-primary">Agregar al carrito</button>
    </div>
  )
}

export default Counter;