import Link from "next/link";

export default function Home() {
  return <main className="normal-home">
    <nav className="normal-nav">
      <Link href="/" className="normal-logo">⬡ PYRO<span>VIGIL</span></Link>
      <div><a href="#platform">Platform</a><a href="#workflow">How it works</a><Link href="/command-center" className="normal-nav-cta">Open Command Center</Link></div>
    </nav>
    <section className="normal-hero earth-hero">
      <div className="normal-copy">
        <p className="normal-kicker">SATELLITE INTELLIGENCE FOR INDIA</p>
        <h1>Predict. Detect.<br/><em>Protect.</em></h1>
        <p>AI-powered thermal intelligence and emergency response support for industrial fire incidents.</p>
        <div className="normal-actions"><Link href="/command-center">Launch Command Center →</Link></div>
        <div className="normal-stats"><span><b>NASA FIRMS</b>Thermal detections</span><span><b>REAL-TIME</b>Risk assessment</span><span><b>24/7</b>Incident monitoring</span></div>
      </div>
      <div className="hero-orbit" aria-hidden="true"/><span className="hero-signal signal-one"/><span className="hero-signal signal-two"/><span className="hero-signal signal-three"/>
    </section>
    <section id="platform" className="normal-cards"><article><span>01</span><h2>Detect</h2><p>Monitor satellite signals and receive current thermal hotspot data.</p></article><article><span>02</span><h2>Assess</h2><p>Classify incident risk with transparent data-driven analysis.</p></article><article><span>03</span><h2>Respond</h2><p>Coordinate impact intelligence and emergency dispatch workflows.</p></article></section>
    <section id="workflow" className="normal-workflow"><p className="normal-kicker">ONE WORKSPACE. CLEAR DECISIONS.</p><h2>From detection to operational response.</h2><p>Explore the live map, analyze FIRMS records, assess risk patterns, and generate an area briefing in the command center.</p><Link href="/command-center">Explore the Command Center →</Link></section>
  </main>;
}
