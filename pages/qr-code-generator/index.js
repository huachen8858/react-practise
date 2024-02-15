import React, { useState } from "react";
import QRCode from "react-qr-code";
import styles from '@/styles/qr-code-generator.module.css'
import Back from "@/components/back";

export default function QRCodeGenerator() {
  const [qrCode, setQrcode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
    setQrcode(input);
    setInput('')
  };

  return (
    <div className={styles['qr-code-container']}>
      <h1>QR Code Generator</h1>
      <div className={styles['input-box']}>
        <input
          type="text"
          name="qr-code"
          placeholder="Enter your value"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
      <Back/>
    </div>
  );
}
