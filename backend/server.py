from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Literal

app = FastAPI(title="Eligio Clean MVP API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

CampaignGoal = Literal["balanced", "sales", "traffic", "awareness"]

class AnalyzeRequest(BaseModel):
    usernames: List[str]
    goal: CampaignGoal = "balanced"

@app.get("/")
def root():
    return {"message": "Eligio API is running"}

@app.get("/api/health")
def health():
    return {"status": "ok", "service": "eligio-clean-api"}

@app.post("/api/analyze")
def analyze(payload: AnalyzeRequest):
    clean_usernames = [
        u.strip().replace("@", "")
        for u in payload.usernames
        if u.strip()
    ][:10]

    demo_results = []

    for index, username in enumerate(clean_usernames):
        base = 86 - index * 7

        if payload.goal == "sales":
            score = base - index * 2
            insight = "Satış hedefi için kitle kalitesi ve güven sinyalleri güçlü görünüyor."
        elif payload.goal == "traffic":
            score = base + (index % 2) * 5
            insight = "Trafik hedefi için erişim ve görünürlük potansiyeli öne çıkıyor."
        elif payload.goal == "awareness":
            score = base + (2 if index == 1 else 0)
            insight = "Bilinirlik hedefi için geniş erişim potansiyeli dikkat çekiyor."
        else:
            score = base
            insight = "Dengeli analizde performans, marka uyumu ve risk birlikte değerlendirildi."

        demo_results.append({
            "username": username,
            "rank": index + 1,
            "score": max(45, min(96, score)),
            "label": "En Mantıklı Seçim" if index == 0 else "Güçlü Alternatif",
            "performanceScore": max(40, min(95, score - 3)),
            "brandFitScore": max(40, min(95, score - 1)),
            "riskScore": max(40, min(95, score - 6)),
            "followers": 42000 + index * 18500,
            "engagementRate": round(3.8 - index * 0.4, 2),
            "decisionInsight": insight,
        })

    demo_results = sorted(
        demo_results,
        key=lambda x: x["score"],
        reverse=True
    )

    for i, item in enumerate(demo_results):
        item["rank"] = i + 1
        item["label"] = (
            "En Mantıklı Seçim"
            if i == 0
            else "Güçlü Alternatif"
        )

    return {
        "goal": payload.goal,
        "count": len(demo_results),
        "results": demo_results
    }
