import * as React from 'react';
import { useState } from 'react';
interface ITestHook1Props {
}

export const TestHook1: React.FunctionComponent<ITestHook1Props> = (props) => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <fieldset>
                <legend>This is TestHook1 from spfx-library</legend>
                <p>From Hook inside Library component: You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </fieldset>
        </div>
    );
};
