import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

export default function QRCodeGenerator() {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [displayText, setDisplayText] = useState()

  function handleQrCode() {
    setQrCode(input);
    setInput("");
    setDisplayText(input)
  }

  return (
    <div className="container">
      <h1>Qr Code Generator</h1>
      <div className="qr-code">
        <input
          onChange={(e) => setInput(e.target.value)}
          placeholder="enter your name"
          type="text"
          name="qr-code"
          value={input}
        />

        <button
          className="qr-btn"
          onClick={() => handleQrCode()}
          disabled={input && input.trim() !== "" ? false : true}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={200} bgColor="#fff" />
        <div style={{ marginTop: '20px' }}><h2 >QrCode : <span style={{ color: "#6b6d7f"}}>{displayText}</span></h2></div>
      </div>
    </div>
  );
}
