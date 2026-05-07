import { useState } from "react";

const demoResults = {
  balanced: [
    {
      username: "deercasegirl",
      score: 91,
      label: "En Mantıklı Seçim",
      insight:
        "Performans, marka uyumu ve risk dengesi en güçlü seçenek olarak öne çıkıyor.",
    },
    {
      username: "fashiondaily",
      score: 84,
      label: "Güçlü Alternatif",
      insight:
        "İyi erişim sağlıyor ancak dönüşüm tarafında daha düşük sinyal veriyor.",
    },
  ],
  sales: [
    {
      username: "deercasegirl",
      score: 93,
      label: "En Mantıklı Seçim",
      insight:
        "Satış odaklı kampanyalar için güven ve dönüşüm potansiyeli yüksek görünüyor.",
    },
    {
      username: "trendwave",
      score: 81,
      label: "Güçlü Alternatif",
      insight:
        "Erişim tarafı güçlü ancak satış sinyalleri daha düşük kalıyor.",
    },
  ],
  traffic: [
    {
      username: "trendwave",
      score: 92,
      label: "En Mantıklı Seçim",
      insight:
        "Trafik ve görünürlük tarafında en güçlü erişim potansiyelini gösteriyor.",
    },
    {
      username: "deercasegirl",
      score: 85,
      label: "Güçlü Alternatif",
      insight:
        "Daha dengeli görünse de trafik odaklı senaryoda ikinci sırada kalıyor.",
    },
  ],
  awareness: [
    {
      username: "fashiondaily",
      score: 90,
      label: "En Mantıklı Seçim",
      insight:
        "Bilinirlik hedefinde erişim genişliği ve görünürlük avantajı sağlıyor.",
    },
    {
      username: "trendwave",
      score: 82,
      label: "Güçlü Alternatif",
      insight:
        "Kampanya görünürlüğü için güçlü alternatif olarak öne çıkıyor.",
    },
  ],
};

function App() {
  const [goal, setGoal] = useState("balanced");

  return (
    <div
      style={{
        background: "#070B14",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 24px 80px",
        }}
      >
        <div style={{ marginBottom: 20, color: "#7B61FF" }}>
          ELIGIO
        </div>

        <h1
          style={{
            fontSize: 64,
            lineHeight: 1,
            maxWidth: 820,
            marginBottom: 24,
          }}
        >
          Paranızı yanlış influencer’lara harcamayın.
        </h1>

        <p
          style={{
            fontSize: 20,
            lineHeight: 1.7,
            color: "#AAB4C5",
            maxWidth: 780,
            marginBottom: 40,
          }}
        >
          Influencer seçimi çoğu zaman tahmine dayanır.
          Yanlış seçim sadece bütçeyi değil,
          kampanyanın tamamını riske atar.
          Eligio, elinizdeki influencer listesini
          AI destekli analiz eder ve hedefinize göre
          en mantıklı, daha düşük riskli seçimi net şekilde gösterir.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 80,
          }}
        >
          {[
            ["balanced", "Dengeli"],
            ["sales", "Satış"],
            ["traffic", "Trafik"],
            ["awareness", "Bilinirlik"],
          ].map(([value, label]) => (
            <button
              key={value}
              onClick={() => setGoal(value)}
              style={{
                background:
                  goal === value ? "#7B61FF" : "#121826",
                color: "white",
                border: "1px solid #20293A",
                padding: "14px 20px",
                borderRadius: 12,
                cursor: "pointer",
                fontSize: 15,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 20,
          }}
        >
          {demoResults[goal].map((item) => (
            <div
              key={item.username}
              style={{
                background: "#101826",
                border: "1px solid #1B2434",
                borderRadius: 20,
                padding: 24,
              }}
            >
              <div
                style={{
                  color: "#7B61FF",
                  marginBottom: 14,
                  fontSize: 14,
                }}
              >
                {item.label}
              </div>

              <h2
                style={{
                  fontSize: 28,
                  marginBottom: 10,
                }}
              >
                @{item.username}
              </h2>

              <div
                style={{
                  fontSize: 56,
                  fontWeight: 700,
                  marginBottom: 20,
                }}
              >
                {item.score}
              </div>

              <p
                style={{
                  color: "#AAB4C5",
                  lineHeight: 1.7,
                }}
              >
                {item.insight}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
