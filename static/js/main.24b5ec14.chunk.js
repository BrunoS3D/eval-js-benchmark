(this["webpackJsonpeval-js-benchmark"]=this["webpackJsonpeval-js-benchmark"]||[]).push([[0],{15:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_bruno_Desktop_GitHub_eval_js_benchmark_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(16),util__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__),_monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_monaco_editor_react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)('const b = []\n\nfor (let idx = 0; idx < 1000000; idx++) {\n\tb.push("BBBBBBBBBB".toLowerCase() === "bbbbbbbbbb")\n}\n\n/*===*/\n\nconst a = []\n\nfor (let idx = 0; idx < 1000000; idx++) {\n\ta.push("aaaaaaaaaa".toUpperCase() === "AAAAAAAAAA")\n}\n\n/*===*/\n\n1 + 2\n\n/*===*/\n\n// error\na + b'),_useState2=Object(C_Users_bruno_Desktop_GitHub_eval_js_benchmark_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),code=_useState2[0],setCode=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)([{error:null,evalResult:void 0,timeInSeconds:0,timeInMilliseconds:0}]),_useState4=Object(C_Users_bruno_Desktop_GitHub_eval_js_benchmark_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),executionStatus=_useState4[0],setExecutionStatus=_useState4[1];function runTest(){if(code&&0!==code.length){var snippets=code.split("/*===*/"),execStatus=snippets.map((function(snippet){var error=null,result=null,t0=performance.now();try{result=eval(snippet)}catch(err){error=err}var t1=performance.now(),durationMs=t1-t0;return{error:error,evalResult:result,timeInSeconds:durationMs/1e3,timeInMilliseconds:durationMs}}));setExecutionStatus(execStatus)}}function consolify(_){return util__WEBPACK_IMPORTED_MODULE_2___default.a.inspect(_,{showHidden:!1})}return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"App"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"main-container",style:{display:"flex",flexDirection:"row"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"left-container"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_3__.ControlledEditor,{width:"50vw",height:"calc(100vh - 15px)",language:"javascript",theme:"dark",value:code,onChange:function(_,e){return setCode(e)}})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"right-container",style:{padding:"30px",color:"#fff",fontFamily:'Consolas, "Courier New", monospace'}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,"Execution Status"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"Use ",react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code",{style:{padding:"2px",borderRadius:"3px",backgroundColor:"#555"}},"/*===*/")," to separate snippets"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{onClick:function(){return runTest()}},"Execute"),executionStatus&&executionStatus.map((function(_,e){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"snippet-status",key:e},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3",null,"Snippet: ",e+1),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"Execution time (seconds): ",_.timeInSeconds),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"Execution time (milliseconds): ",_.timeInMilliseconds),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"Eval result: ",consolify(_.evalResult)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"Error: ",consolify(_.error)))})))))}__webpack_exports__.a=App},17:function(_,e,t){_.exports=t(18)},18:function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),n=t(14),c=t.n(n),l=t(15);t(56);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null)),document.getElementById("root"))},56:function(_,e,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.24b5ec14.chunk.js.map