import { useState } from "react";

function MediAI() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [history, setHistory] = useState([]);

  const askAI = () => {
    if (!question.trim()) {
      setAnswer("Please enter a question.");
      return;
    }

    const q = question.toLowerCase();
    let response = "";

    if (q.includes("chest pain") || q.includes("chest")) {
      response = "Chest pain can indicate cardiac issues. Recommended: Cardiologist. Please seek medical attention if severe.";
    } else if (q.includes("headache") || q.includes("migraine")) {
      response = "Possible migraine or tension headache. Recommended: Neurologist. Stay hydrated and rest.";
    } else if (q.includes("fever") || q.includes("temperature")) {
      response = "Fever may indicate infection. Recommended: General Physician. Monitor and stay hydrated.";
    } else if (q.includes("cough") || q.includes("throat")) {
      response = "Possible respiratory issue. Recommended: Pulmonologist. Avoid irritants and monitor symptoms.";
    } else if (q.includes("stomach") || q.includes("gastric") || q.includes("burning")) {
      response = "Possible gastric irritation. Recommended: Gastroenterologist. Avoid spicy foods.";
    } else if (q.includes("fracture") || q.includes("bone") || q.includes("broken")) {
      response = "EMERGENCY: Possible bone fracture. Recommended: Orthopedic Surgeon. Seek immediate care.";
    } else if (q.includes("bleed") || q.includes("blood") || q.includes("wound")) {
      response = "EMERGENCY: Possible severe injury. Apply pressure and call emergency services immediately.";
    } else if (q.includes("burn") || q.includes("scald")) {
      response = "Cool burn under water for 10-20 minutes. Seek immediate medical care.";
    } else if (q.includes("poison") || q.includes("overdose") || q.includes("toxic")) {
      response = "EMERGENCY: Call Poison Control immediately. Do not delay!";
    } else if (q.includes("appointment") || q.includes("book")) {
      response = "Book appointments using the Booking page. Select doctor, date, and time.";
    } else if (q.includes("doctor") || q.includes("specialist")) {
      response = "Available specialists: Cardiologists, Neurologists, Pulmonologists, Gastroenterologists, General Physicians.";
    } else if (q.includes("cost") || q.includes("fee") || q.includes("price")) {
      response = "Consultation fees range from 500-900 rupees. Check Doctors page for details.";
    } else if (q.includes("profile") || q.includes("medical") || q.includes("history")) {
      response = "Update your medical profile in Profile section for personalized care.";
    } else if (q.includes("analysis") || q.includes("analyze")) {
      response = "Use Analysis page to describe symptoms. AI will recommend appropriate specialists.";
    } else if (q.includes("emergency")) {
      response = "For emergencies, use Emergency page or call 911. Never wait for AI response in critical situations.";
    } else {
      response = "I can help with symptoms, doctors, appointments, medical history, or emergencies. What do you need?";
    }

    setAnswer(response);
    setHistory([...history, { q: question, a: response }]);
    setQuestion("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      askAI();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#4f46e5",
          color: "white",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(79, 70, 229, 0.4)",
          transition: "transform 0.2s ease",
          zIndex: 20,
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        title="Chat with MediAI"
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "90px",
            width: "360px",
            maxHeight: "500px",
            padding: "16px",
            border: "2px solid #4f46e5",
            background: "white",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            display: "flex",
            flexDirection: "column",
            zIndex: 21,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "12px",
              paddingBottom: "12px",
              borderBottom: "1px solid #e5e7eb",
            }}
          >
            <h3 style={{ margin: 0, color: "#1f2937" }}>MediAI Assistant</h3>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              marginBottom: "12px",
              paddingRight: "8px",
              maxHeight: "280px",
              fontSize: "13px",
              color: "#374151",
            }}
          >
            {history.length > 0 ? (
              history.map((item, idx) => (
                <div key={idx} style={{ marginBottom: "12px" }}>
                  <p style={{ fontWeight: 600, color: "#1f2937", marginBottom: "4px" }}>
                    You: {item.q}
                  </p>
                  <p style={{ color: "#4f46e5", marginBottom: "8px" }}>AI: {item.a}</p>
                </div>
              ))
            ) : (
              <p style={{ color: "#9ca3af", fontStyle: "italic" }}>
                Hi! Ask me anything about your health...
              </p>
            )}
            {answer && !history.some((h) => h.a === answer) && (
              <div>
                <p style={{ fontWeight: 600, color: "#1f2937", marginBottom: "4px" }}>
                  You: {question}
                </p>
                <p style={{ color: "#4f46e5" }}>AI: {answer}</p>
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me..."
              style={{
                flex: 1,
                padding: "10px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "13px",
                fontFamily: "inherit",
              }}
            />
            <button
              onClick={askAI}
              style={{
                padding: "10px 16px",
                background: "#4f46e5",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "13px",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MediAI;
