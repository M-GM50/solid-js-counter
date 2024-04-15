import { createSignal } from "solid-js"
import "./Counter.css";

const Counter = () => {

    const [count, setCount] = createSignal(0);

    return (
        <>
            <br></br>
            <p class="question">Do you like Solid JS?</p>
        <div class="counter">
          <button onClick={() => setCount(count() -1)} class="btn btn-danger">No. Hate it...</button>
                <span>{count()}</span>
          <button onClick={() => setCount(count() + 1)} class="btn btn-success">Yes! Love it</button>
        </div>
      </>
    );
}

export default Counter;