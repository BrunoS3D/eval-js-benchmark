import React, { useState } from "react";
import util from "util";
import { ControlledEditor } from "@monaco-editor/react";

function App() {
    const [code, setCode] = useState("var a = 5, b = 10;\n\na + b;");
    const [executionStatus, setExecutionStatus] = useState({ error: null, evalResult: undefined, timeInSeconds: 0, timeInMilliseconds: 0 });

    function runTest() {
        if (!code || code.length === 0) return;

        let error = null;
        let result = null;
        const t0 = performance.now();

        try {
            result = eval(code);
        } catch (err) {
            error = err;
        }

        const t1 = performance.now();

        const durationMs = t1 - t0;

        const status = { error, evalResult: result, timeInSeconds: durationMs / 1000, timeInMilliseconds: durationMs };

        setExecutionStatus(status);
    }

    function consolify(value: any) {
        return util.inspect(value, { showHidden: false });
    }

    return (
        <div className="App">
            <div className="main-container" style={{ display: "flex", flexDirection: "row" }}>
                <div className="left-container">
                    <ControlledEditor
                        width="50vw"
                        height="calc(100vh - 15px)"
                        language="javascript"
                        theme="dark"
                        value={code}
                        onChange={(event, value) => setCode(value as string)}
                    />
                </div>
                <div className="right-container" style={{ padding: "30px", color: "#fff", fontFamily: 'Consolas, "Courier New", monospace' }}>
                    <h1>Execution Status</h1>
                    <button onClick={() => runTest()}>Execute</button>

                    <p>Execution time (seconds): {executionStatus.timeInSeconds}</p>
                    <p>Execution time (milliseconds): {executionStatus.timeInMilliseconds}</p>
                    <p>Eval result: {consolify(executionStatus.evalResult)}</p>
                    <p>Error: {consolify(executionStatus.error)}</p>
                </div>
            </div>
        </div>
    );
}

export default App;
