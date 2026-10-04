# 🔥 PyroVigil | Thermal Intelligence

**AI-Based Detection and Classification of Industrial Fires and Persistent Thermal Sources**

PyroVigil is an AI-powered thermal intelligence platform designed to detect, analyze, and monitor potential industrial fires and persistent thermal hotspots using satellite data, weather information, and geospatial intelligence.

## 🚀 Live Demo

**PyroVigil:**
https://pyrovigil-npdwh2eyc-codewithkadambaris-projects.vercel.app/

## 🎯 Problem

Industrial fires and persistent thermal sources can cause serious damage to people, infrastructure, and the environment. Traditional monitoring methods may not provide fast enough information about emerging fire risks.

PyroVigil combines satellite hotspot data, weather conditions, geospatial information, and AI-based analysis to help identify and understand potential fire risks.

## 💡 Key Features

* 🔥 **Thermal Hotspot Detection** using NASA FIRMS data
* 🗺️ **Interactive Command Center Map**
* 🌡️ **Weather-Based Risk Analysis**
* 🤖 **AI Assistant** for hotspot analysis and explanations
* 📊 **Fire Risk Classification**
* 💨 **Wind Direction & Potential Spread Analysis**
* 🏭 **Industrial Facility & Location Analysis**
* 📍 **Geospatial Visualization**
* 🚨 **Risk Alerts** for potentially dangerous hotspots
* 📈 **Historical Hotspot Analysis**

## 🧠 How It Works

```text
Satellite Data (NASA FIRMS)
          ↓
Hotspot Detection
          ↓
Weather + Geospatial Data
          ↓
AI-Based Risk Analysis
          ↓
Risk Classification
          ↓
Interactive Command Center
          ↓
AI Explanation & Alerts
```

## 🛠️ Technology Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* React

### Backend

* FastAPI
* Python

### Database & Storage

* PostgreSQL
* Redis
* Qdrant

### Data Sources

* NASA FIRMS
* OpenStreetMap (OSM)
* Weather APIs

### AI / ML

* XGBoost
* Convolutional Features
* Geospatial Analysis
* AI-powered assistant

## 📊 Risk Classification

PyroVigil classifies detected hotspots based on multiple factors such as:

* Fire brightness
* Fire Radiative Power (FRP)
* Confidence level
* Temperature
* Humidity
* Wind speed
* Wind direction
* Distance from industrial facilities
* Historical hotspot activity

Hotspots are categorized into different risk levels to help users understand the severity of a detected thermal source.

## 🤖 AI Assistant

The integrated AI Assistant helps users understand detected hotspots by providing information such as:

* What the hotspot represents
* Potential fire risk
* Weather conditions
* Possible direction of fire spread
* Nearby industrial facilities
* Recommended areas for attention

## 🗺️ Data & Geospatial Intelligence

PyroVigil combines satellite observations with geospatial information from **OpenStreetMap** to identify nearby facilities and potentially vulnerable areas.

Historical hotspot data can also be analyzed to identify recurring thermal activity.

## 📁 Project Structure

```text
pyrovigil/
├── app/
│   ├── api/
│   ├── components/
│   └── pages/
├── backend/
│   ├── APIs
│   ├── AI analysis
│   └── data processing
├── public/
├── .env.local
├── package.json
├── next.config.ts
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd pyrovigil
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file and add the required API keys and configuration values.

Example:

```env
FIRMS_API_KEY=your_firms_api_key
WEATHER_API_KEY=your_weather_api_key
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🌐 Deployment

The project is deployed using Vercel.

**Live Application:**
https://pyrovigil-npdwh2eyc-codewithkadambaris-projects.vercel.app/

## 🎓 Project

**Project Name:** PyroVigil

**Domain:** Artificial Intelligence, Data Science & Disaster Management

**Focus:** Industrial Fire Detection and Thermal Source Monitoring

## 👩‍💻 Team

* Dhanshree
* Kalyani
* Tejaswini
* Khushi
* Anuksha
* Kadambari

## 🔮 Future Improvements

* Real-time emergency notifications
* Improved fire-spread prediction
* More accurate AI risk scoring
* Mobile application
* Integration with additional satellite datasets
* Automated emergency response recommendations
* Improved live FIRMS data integration

## 📜 License

This project is developed for educational, research, and innovation purposes.
