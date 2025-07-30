import React, { useState } from "react";

export default function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const addition = (a, b) => a + b;
  const subtraction = (a, b) => a - b;
  const multiplication = (a, b) => a * b;
  const division = (a, b) => b !== 0 ? a / b : "Error: Division by zero";
  const modulus = (a, b) => b !== 0 ? a % b : "Error: Division by zero";
  const squareRoot = (a) => Math.sqrt(a);

  const answer = (operations) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res = null;

    if (operations === "+") {
      res = addition(a, b);
    } else if (operations=== "-") {
      res = subtraction(a, b);
    } else if (operations === "*") {
      res = multiplication(a, b);
    } else if (operations === "/") {
      res = division(a, b);
    } else if (operations === "%") {
      res = modulus(a, b);
    } else if (operations === "sqrt") {
      res = squareRoot(a);
    } else {
      res = "Invalid operator";
    }

    setResult(res);
  };

  return (
    <div className="container">
    <h1>Pien Calculator</h1>
    <input value={num1} onChange={(e) => setNum1(e.target.value)} />
    <input value={num2} onChange={(e) => setNum2(e.target.value)} />
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
      <button className="button" onClick={() => answer("+")}>+</button>
      <button className="button" onClick={() => answer("-")}>-</button>
      <button className="button" onClick={() => answer("*")}>×</button>
      <button className="button" onClick={() => answer("/")}>÷</button>
      <button className="button" onClick={() => answer("%")}>%</button>
      <button className="button" onClick={() => answer("sqrt")}>√</button>
    </div>
    {result !== null && <div className="result">Result: {result}</div>}
  </div>
);
}
