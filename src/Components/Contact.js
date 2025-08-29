import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendMessageToTelegram = async () => {
    const botToken = "7991259289:AAG7NNg2KjkxC8FKweswD8opgpRFjds61yQ";
    const chatId = "7831183802";
    const text = `📩 *Yangi Xabar!*\n\n👤 *Ism*: ${name}\n📧 *Email*: ${email}\n📱 *Telefon*: ${phone}\n🏠 *Manzil*: ${address}\n📝 *Xabar*: ${message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      const result = await response.json();
      if (result.ok) {
        showStatus("✅ Xabar muvaffaqiyatli yuborildi!");
      } else {
        showStatus(`❌ Xatolik: ${result.description}`);
      }
    } catch (error) {
      console.error("Xatolik:", error);
      showStatus("❌ Xatolik yuz berdi. Qaytadan urinib ko‘ring.");
    }
  };

  const showStatus = (msg) => {
    setStatus(msg);
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showStatus("⏳ Xabaringiz yuborilmoqda...");
    sendMessageToTelegram();
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <p>Get in touch</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <textarea
          placeholder="Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Send</button>
      </form>

      {status && <p style={{ marginTop: "10px" }}>{status}</p>}
    </div>
  );
};

export default Contact;
