import React, { useState } from "react";
import util from "util";
import { ControlledEditor } from "@monaco-editor/react";

function App() {
    const [code, setCode] = useState(
        'const b = []\n\nfor (let idx = 0; idx < 1000000; idx++) {\n\tb.push("BBBBBBBBBB".toLowerCase() === "bbbbbbbbbb")\n}\n\n/*===*/\n\nconst a = []\n\nfor (let idx = 0; idx < 1000000; idx++) {\n\ta.push("aaaaaaaaaa".toUpperCase() === "AAAAAAAAAA")\n}\n\n/*===*/\n\n1 + 2\n\n/*===*/\n\n// error\na + b'
    );
    const [executionStatus, setExecutionStatus] = useState([{ error: null, evalResult: undefined, timeInSeconds: 0, timeInMilliseconds: 0 }]);

    function runTest() {
        if (!code || code.length === 0) return;

        const snippets = code.split("/*===*/");

        const execStatus = snippets.map((snippet) => {
            let error = null;
            let result = null;
            const t0 = performance.now();

            try {
                result = eval(snippet);
            } catch (err) {
                error = err;
            }

            const t1 = performance.now();

            const durationMs = t1 - t0;

            return { error, evalResult: result, timeInSeconds: durationMs / 1000, timeInMilliseconds: durationMs };
        });

        setExecutionStatus(execStatus);
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
                    <p>
                        Use <code style={{ padding: "2px", borderRadius: "3px", backgroundColor: "#555" }}>/*===*/</code> to separate snippets
                    </p>
                    <button onClick={() => runTest()}>Execute</button>
                    {executionStatus &&
                        executionStatus.map((snippet, index) => (
                            <div className="snippet-status" key={index}>
                                <h3>Snippet: {index + 1}</h3>
                                <p>Execution time (seconds): {snippet.timeInSeconds}</p>
                                <p>Execution time (milliseconds): {snippet.timeInMilliseconds}</p>
                                <p>Eval result: {consolify(snippet.evalResult)}</p>
                                <p>Error: {consolify(snippet.error)}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
