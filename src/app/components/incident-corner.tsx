"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function IncidentCorner() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [step, setStep] = useState(0);
  const [dispatched, setDispatched] = useState(false);
  if (pathname !== "/command-center") return null;
  const exposure = ["2.4 km²", "3.1 km²", "4.0 km²", "5.2 km²"][step];
  const population = ["12,600", "16,800", "22,100", "28,900"][step];
  return <>
    {!open && <button className="corner-open" onClick={() => setOpen(true)}>◉ Incident overview</button>}
    {open && <aside className="incident-corner">
      <header><span>Thermal Incident Overview</span><button onClick={() => setOpen(false)}>×</button></header>
      <div className="incident-summary"><div className="corner-donut"><b>127</b><small>Total events</small></div><div className="corner-counts"><p><i className="high"/><b>12</b><span>High Risk</span></p><p><i className="medium"/><b>34</b><span>Medium Risk</span></p><p><i className="low"/><b>81</b><span>Low Risk</span></p></div></div>
      <section className="corner-trend"><b>Risk Trend (Last 7 Days)</b><svg viewBox="0 0 250 78" preserveAspectRatio="none"><path className="corner-area" d="M0,52 L22,54 L43,61 L65,39 L86,30 L108,35 L130,21 L151,29 L173,42 L195,37 L216,22 L238,33 L250,27 V78 H0 Z"/><path className="corner-line" d="M0,52 L22,54 L43,61 L65,39 L86,30 L108,35 L130,21 L151,29 L173,42 L195,37 L216,22 L238,33 L250,27"/></svg><footer><span>Day 1</span><span>Today</span></footer></section>
      <section className="corner-weather"><b>Weather & Wind</b><div><strong>☀︎</strong><span><em>31°C</em><small>Partly cloudy</small></span><p>Humidity <b>48%</b><br/>Wind <b>18 km/h NE</b><br/>Pressure <b>1008 hPa</b></p></div></section>
      <section className="corner-impact"><header><b>Potential Impact Simulation</b><div>{["Now","+15m","+30m","+60m"].map((t,i)=><button key={t} className={step===i?"selected":""} onClick={()=>setStep(i)}>{t}</button>)}</div></header><div className="impact-view"><i/><span className={`impact-cone cone-${step}`}/><b>↗ NE</b></div><div className="impact-stats"><span>Affected Assets<b>{5+step}</b></span><span>Estimated Exposure<b>{exposure}</b></span><span>Population at Risk<b>{population}</b></span></div><button className="simulate-button" onClick={()=>setStep((step+1)%4)}>Run Simulation　→</button></section>
      <section className="corner-dispatch"><span><b>{dispatched?"● Unit dispatched":"○ Dispatch ready"}</b><small>{dispatched?"BMC Fire Brigade • ETA 06 min":"Nearest brigade: 2.8 km away"}</small></span><button onClick={()=>setDispatched(x=>!x)}>{dispatched?"Recall":"Dispatch"}</button></section>
    </aside>}
  </>;
}
