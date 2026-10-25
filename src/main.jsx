import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const asset = (file) => `${import.meta.env.BASE_URL}assets/${file}`;

function Picture({ file, alt = '', className = '', ...props }) {
  return <img src={asset(file)} alt={alt} className={className} {...props} />;
}

function SectionTitle({ label, children, className = '' }) {
  return <div className={`section-title ${className}`}><div className="eyebrow"><Picture file="fa13f.svg" />{label}</div><h2>{children}</h2></div>;
}

function Action({ children = 'Join Wishlist', onClick, muted = false, arrow = true }) {
  const left = muted ? '91035.svg' : '304e1.svg';
  const right = muted ? '56652.svg' : 'aec77.svg';
  return <button type="button" className={`action ${muted ? 'action-muted' : ''}`} onClick={onClick}>
    <span className="action-piece"><Picture file={left} className="angle-left" /><span className="action-label">{children}</span><Picture file={right} /></span>
    {arrow && <span className="action-piece action-arrow"><Picture file={left} className="angle-left" /><span className="arrow-center"><Picture file="d4afb.svg" /></span><Picture file={right} /></span>}
  </button>;
}

function Header({ onJoin }) {
  const [open, setOpen] = useState(false);
  return <header className="header">
    <a className="brand" href="#top" aria-label="Metaphor Security home"><Picture file="117c1.svg" /><span>Metaphor Security</span></a>
    <button className="menu-toggle" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
    <nav id="primary-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
      {[['Solutions', '#solutions'], ['How it Works', '#how-it-works'], ['Values', '#values']].map(([text, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{text}</a>)}
      <button className="nav-join" onClick={() => { setOpen(false); onJoin(); }}><span>Join Wishlist</span><span className="nav-arrow"><Picture file="3831c.svg" /></span></button>
    </nav>
  </header>;
}

function Hero({ onJoin, onInvestor }) {
  return <section className="hero" id="top" data-figma-node="226:17">
    <div className="hero-art"><Picture file="a626b.png" alt="Three architectural islands connected around the Metaphor Security emblem" fetchPriority="high" /><div /></div>
    <div className="hero-fade" />
    <Header onJoin={onJoin} />
    <div className="hero-heading"><h1>The Ecosystem<br />Behind Cybersecurity</h1><div className="hero-actions"><Action muted arrow={false} onClick={onInvestor}>See Investor Informations</Action><Action onClick={onJoin} /></div></div>
    <div className="hero-bottom">
      <div className="partners" aria-label="Companies represented in the Figma design">
        <Picture file="9dd66.png" alt="ABB" className="partner-abb" /><Picture file="fa486.png" alt="Stena Line" className="partner-stena" />
        <span className="partner-siemens"><Picture file="9cbdc.svg" className="siemens-box" /><Picture file="1787b.svg" alt="Siemens" /></span>
        <Picture file="e9112.png" alt="Subsea 7" className="partner-subsea" /><Picture file="7f3f6.png" alt="Danfoss" className="partner-danfoss" /><Picture file="6f230.png" alt="Boskalis" className="partner-boskalis" /><Picture file="b30a8.png" alt="Technip" className="partner-technip" />
      </div>
      <p>We bring organizations, cybersecurity professionals, and security companies together in one trusted ecosystem where expertise meets opportunity, meaningful partnerships take shape, and stronger security becomes possible for everyone.</p>
    </div>
  </section>;
}

const audiences = [
  { name: 'Organizations', short: 'Organization', image: 'f4f85.png', cardImage: 'f3c67.png', title: 'Bring the challenge.', description: 'Find trusted cybersecurity expertise and solutions to protect your business and strengthen your security.' },
  { name: 'Cybersecurity Professionals', short: 'Professionals', image: 'd9389.png', cardImage: 'ee6ba.png', title: 'Bring the expertise.', description: 'Showcase your expertise, connect with organizations, and unlock meaningful career and project opportunities.' },
  { name: 'Security Companies', short: 'Companies', image: 'c687c.png', cardImage: 'd78c2.png', title: 'Bring the capability.', description: 'Reach the right clients, build strategic partnerships, and grow your business within a trusted ecosystem.' },
];
const audienceCopy = 'Bring your security challenges, business context, and priorities. Metaphor helps you connect with relevant professionals and security companies equipped to solve what matters.';
const steps = [
  ['Your Perspective', <>Define what you<br />need or offer</>, 'Whether you are an organization, a cybersecurity professional, or a security company, begin by identifying where you fit and what you bring to the network.'],
  ['YOUR CONTEXT', <>Find the<br />right fit</>, 'Clarify your cybersecurity needs, expertise, capabilities, and goals so the ecosystem can understand what the right connection looks like for you.'],
  ['THE SHARED PICTURE', <>Turn the connection<br />into action</>, 'Discover relevant expertise, opportunities, and partners across the ecosystem, creating connections designed to lead to stronger cybersecurity outcomes.'],
];

function Solutions({ onJoin }) {
  return <section className="solutions section" id="solutions" data-figma-node="226:81">
    <div className="solution-intro"><SectionTitle label="The Solution">Three Dimensions<br />One Ecosystem</SectionTitle><div className="solution-note"><p>Organizations, cybersecurity professionals, and security companies each bring a different perspective. Metaphor Security places all three within one ecosystem.</p><Action onClick={onJoin} /></div></div>
    <div className="coin-art" data-figma-node="226:107"><video autoPlay={!window.matchMedia('(prefers-reduced-motion: reduce)').matches} muted loop playsInline preload="metadata" poster={asset('coin-source-1.png')} aria-label="Rotating Metaphor Security ecosystem coin"><source src={asset('white-meta.mp4')} type="video/mp4" /></video><div className="coin-bottom" /><div className="coin-top" /><div className="coin-left" /><div className="coin-right" /><div className="coin-diagonal" /></div>
    <div className="solution-cards">{audiences.map((audience, i) => <article className="solution-card" key={audience.name}><span className="card-index">00{i + 1}</span><div><h3>{audience.name}</h3><p>{audience.description}</p></div><Picture file={audience.image} alt="" /></article>)}</div>
  </section>;
}

function HowItWorks() {
  return <section className="how section" id="how-it-works" data-figma-node="226:148"><div className="how-art"><Picture file="e4474.png" alt="Three audiences flowing together into one connected ecosystem" loading="lazy" /></div><div className="how-content"><SectionTitle label="How it works">From Need to<br />the Right Connection</SectionTitle><div className="steps">{steps.map(([label, title, copy], i) => <article className="step" key={label}><span className="step-number">0{i + 1}</span><div className="step-heading"><span>{label}</span><h3>{title}</h3></div><p>{copy}</p></article>)}</div></div></section>;
}

function Audiences() {
  return <section className="audiences section" id="who-its-for" data-figma-node="226:193"><SectionTitle label="Who it’s for">From Need to<br />the Right Connection</SectionTitle><div className="audience-cards">{audiences.map((audience, i) => <article className="audience-card" key={audience.name}><span className="audience-number">0{i + 1}</span><Picture file="8b100.svg" className="card-cutout" /><Picture file={audience.cardImage} alt={audience.name} className="audience-art" loading="lazy" /><div className="audience-copy"><p className="audience-label">{['Organizations', 'Professionals', 'Security companies'][i]}</p><h3>{audience.title}</h3><p>{audienceCopy}</p></div></article>)}</div></section>;
}

const foundations = [
  ['Context', 'Understanding the need, objective, expertise, and capability involved.'],
  ['Verification', 'Establishing credibility and confidence in who is entering the ecosystem.'],
  ['Fit', 'Connecting requirements with the right expertise, services, and capacity.'],
  ['Collaboration', 'Giving both sides the context needed to turn an introduction into productive work.'],
  ['Trust over time', 'Building stronger relationships, reputation, and repeat opportunities across the ecosystem.'],
];

function Foundation() {
  return <section className="foundation section" id="company-depth" data-figma-node="226:225">
    <SectionTitle label="Depth of the company">You see the connection.<br />What makes it work runs deeper.</SectionTitle>
    <div className="iceberg-diagram">
      <div className="surface-copy"><span className="diagram-label">Above the Surface</span><h3>What People see</h3><p>The right connection taking shape<br />across the ecosystem</p><div className="tags">{['Projects', 'Expertise', 'Partnerships', 'Opportunities'].map(tag => <span key={tag}>{tag}</span>)}</div></div>
      <Picture file="aec39.svg" className="surface-connector" /><Picture file="5a96c.svg" className="surface-bracket" />
      <div className="iceberg-art"><Picture file="c95d5.png" alt="An iceberg showing the visible connection above a much larger foundation" loading="lazy" /></div>
      <Picture file="5bfcd.svg" className="waterline" />
      <div className="visible-signal"><Picture file="a7dff.svg" /><span>Visible Signal</span></div>
      <div className="hidden-signal"><span>Hidden Foundation</span><Picture file="628a5.svg" /></div>
      <div className="foundation-copy"><span className="diagram-label">Below the Surface</span><h3>The trust and intelligence<br />behind every match.</h3><ol>{foundations.map(([title, copy], i) => <li key={title}><span>0{i + 1}</span><p><strong>{title}</strong> <span>{copy}</span></p></li>)}</ol></div>
      <Picture file="2f8aa.svg" className="foundation-connector" /><Picture file="e4d6d.svg" className="foundation-bracket" />
      <p className="foundation-note">Metaphor does more than connect organizations, cybersecurity professionals, and security companies.<br />It creates the context, trust, and fit that turn introductions into meaningful work.</p>
    </div>
  </section>;
}

const valuePanels = [
  { image: 'ea8f7.png', title: 'Need meets expertise.', copy: 'Organizations bring real cybersecurity challenges, business context, and priorities. Metaphor connects them with professionals and security companies whose expertise and capabilities fit the work.', value: 'Faster access to relevant expertise, stronger-fit partners, and more confident cybersecurity decisions.' },
  { image: 'd9389.png', title: 'Bring the expertise.', copy: audiences[1].description, value: 'Discover relevant expertise, opportunities, and partners across the ecosystem, creating connections designed to lead to stronger cybersecurity outcomes.' },
  { image: 'c687c.png', title: 'Bring the capability.', copy: audiences[2].description, value: 'More relevant opportunities, stronger partnerships, and better-fit collaboration.' },
];

function Values({ onJoin }) {
  const [active, setActive] = useState(0);
  const [interacted, setInteracted] = useState(false);
  const panel = valuePanels[active];
  function select(index) { setActive(index); setInteracted(true); }
  function move(event) {
    const index = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? (active + 1) % 3 : event.key === 'ArrowUp' || event.key === 'ArrowLeft' ? (active + 2) % 3 : event.key === 'Home' ? 0 : event.key === 'End' ? 2 : null;
    if (index === null) return;
    event.preventDefault(); select(index); document.getElementById(`audience-tab-${index}`).focus();
  }
  return <section className="values section" id="values" data-figma-node="226:295"><Picture file="6a94f.svg" className="value-rule rule-top" /><div className="value-box"><div className="value-left"><div><SectionTitle label="Interconnected Value">Where each audience<br />creates value for the others.</SectionTitle><p className="value-intro">Organizations bring real cybersecurity needs. Professionals bring specialized expertise. Security companies bring structured capability and delivery. Metaphor connects these strengths so each audience can access the value of the others through more relevant opportunities, stronger partnerships, and better-fit collaboration.</p><Action onClick={onJoin} /></div><div className={`audience-tabs ${interacted ? 'has-interacted' : ''}`} role="tablist" aria-label="Audience value" aria-orientation="vertical" onKeyDown={move}>{audiences.map((audience, i) => <button key={audience.name} type="button" id={`audience-tab-${i}`} role="tab" aria-selected={i === active} aria-controls="audience-panel" tabIndex={i === active ? 0 : -1} onClick={() => select(i)} className={i === active ? 'is-selected' : ''}><Picture file={audience.image} />{audience.short}</button>)}</div></div><div className="value-panel" role="tabpanel" id="audience-panel" aria-labelledby={`audience-tab-${active}`} tabIndex="0"><Picture file={panel.image} alt={active === 0 ? 'Organizations and experts collaborating across a shared table' : audiences[active].name} className={`value-art ${active > 0 ? 'value-art-alternate' : ''}`} loading="lazy" /><div className="value-description"><h3>{panel.title}</h3><p>{panel.copy}</p></div><div className="value-outcome"><h4>The value</h4><p>{panel.value}</p></div></div></div><Picture file="6a94f.svg" className="value-rule rule-bottom" /></section>;
}

const quote = "Stablecoins represent a revolution in digital finance. The dollar now has an internet-native payment rail that is fast, frictionless, and free of middlemen. This groundbreaking technology will buttress the dollar's status as the global reserve currency, expand access to the dollar economy for billions across the globe, and lead to a surge in demand for U.S. Treasuries, which back stablecoins.";
function Testimonials() {
  return <section className="testimonials section" id="testimonials" data-figma-node="226:336"><SectionTitle label="Testimonials">Trust is earned.<br />So are these words.</SectionTitle><div className="testimonial-layout"><div className="portrait-column"><div className="portrait"><Picture file="ed03c.svg" className="portrait-grid-vertical" /><Picture file="99871.svg" className="portrait-grid-horizontal" /><Picture file="64b99.png" alt="Scott Bessent" className="portrait-photo" loading="lazy" /><span /></div><div className="testimonial-indicators" aria-hidden="true"><i /><i className="current" /><i /><i /><i /></div></div><div className="testimonial-copy"><div className="quote-mark"><Picture file="dd4b9.png" /></div><blockquote>{quote}</blockquote><div className="quote-author"><p>Scott Bessent</p><span>U.S. Treasury Secretary</span></div></div></div></section>;
}

function Signup({ compact = false }) {
  const [message, setMessage] = useState('');
  function submit(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get('email');
    try { localStorage.setItem('metaphor-newsletter', email); setMessage('Email saved on this device. Live signup is not connected yet.'); event.currentTarget.reset(); }
    catch { setMessage('Your browser could not save this email. Please try again.'); }
  }
  return <form className={compact ? 'signup compact' : 'signup'} onSubmit={submit}><label htmlFor="newsletter-email">Sign Up to Stay Sharp</label><div className="signup-field"><input id="newsletter-email" type="email" name="email" placeholder="Enter your email" autoComplete="email" required aria-describedby="signup-message" /><button type="submit"><span>Sign Up</span><span><Picture file="3831c.svg" /></span></button></div><p id="signup-message" className="form-message" role="status">{message}</p></form>;
}

function Footer() {
  return <footer className="footer" data-figma-node="226:378"><div className="footer-top"><div className="footer-links"><div><h3>Explore</h3><a href="#solutions">The Solution</a><a href="#how-it-works">How it works</a><a href="#who-its-for">Who is it for</a></div><div><h3>Resources</h3><a href="#company-depth">Depth of the Company</a><a href="#values">The Value</a></div><div><h3>Social Media</h3><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="https://x.com/" target="_blank" rel="noreferrer">Twitter</a></div></div><Signup compact /></div><div className="footer-sculpture"><div><Picture file="2b867.png" alt="Sculptural Metaphor Security emblem" loading="lazy" /><span /></div></div><div className="footer-bottom"><div className="footer-wordmark"><Picture file="06ef2.svg" alt="Metaphor Security" /><div className="wordmark-blur"><Picture file="dab68.png" /></div></div><p>© 2026 Metaphor Security Inc. All Right Reserved</p></div></footer>;
}

function WishlistDialog({ type, onClose }) {
  const ref = useRef(null);
  const [message, setMessage] = useState('');
  useEffect(() => {
    const previousFocus = document.activeElement;
    const modal = ref.current;
    modal.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; previousFocus?.focus(); };
  }, []);
  function submit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try { localStorage.setItem('metaphor-wishlist', JSON.stringify(data)); setMessage('Your interest is saved on this device. Live registration is not connected yet.'); }
    catch { setMessage('Your browser could not save your details. Please try again.'); }
  }
  return <dialog ref={ref} className="join-dialog" aria-labelledby="dialog-title" onCancel={onClose} onClick={event => { if (event.target === ref.current) onClose(); }}><div className="dialog-inner"><button type="button" className="dialog-close" onClick={onClose} aria-label="Close dialog">×</button><div className="eyebrow"><Picture file="fa13f.svg" />Metaphor Security</div><h2 id="dialog-title">{type === 'investor' ? 'The ecosystem behind cybersecurity.' : 'Join the Wishlist.'}</h2>{type === 'investor' ? <><p>Metaphor Security brings organizations, cybersecurity professionals, and security companies together in one trusted ecosystem.</p><p>Investor documents and contact details have not been supplied with this design.</p><a className="dialog-link" href="#company-depth" onClick={onClose}>See the depth of the company</a></> : <><p>Connect your perspective with the ecosystem.</p><form onSubmit={submit}><label htmlFor="wishlist-name">Name</label><input id="wishlist-name" name="name" autoComplete="name" required /><label htmlFor="wishlist-email">Email</label><input id="wishlist-email" name="email" type="email" autoComplete="email" required /><label htmlFor="wishlist-role">Your perspective</label><select id="wishlist-role" name="role"><option>Organization</option><option>Cybersecurity Professional</option><option>Security Company</option></select><p className="local-note">This preview saves your interest on this device.</p><button type="submit" className="dialog-submit">Join Wishlist</button><p className="form-message" role="status">{message}</p></form></>}</div></dialog>;
}

function App() {
  const [dialog, setDialog] = useState(null);
  const onJoin = () => setDialog('wishlist');
  return <><main><Hero onJoin={onJoin} onInvestor={() => setDialog('investor')} /><Solutions onJoin={onJoin} /><HowItWorks /><Audiences /><Foundation /><Values onJoin={onJoin} /><Testimonials /><Footer /></main>{dialog && <WishlistDialog type={dialog} onClose={() => setDialog(null)} />}</>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
