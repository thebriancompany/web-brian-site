import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="hero">
        <p className="eyebrow"><span className="status-dot" /> THE BRIAN COMPANY</p>
        <h1>작은 아이디어,<br />더 나은 <span className="accent">일상.</span></h1>
        <p className="intro">매일의 순간에 자연스럽게 스며드는 앱.<br />Brian의 새로운 이야기들을 이곳에서 만나보세요.</p>
        <a className="button" href="#apps">앱 둘러보기 <span aria-hidden="true">↓</span></a>
        <div className="hero-art" aria-hidden="true"><div className="orbit" /><div className="tile tile-back" /><div className="tile tile-front">b<span>.</span></div><span className="spark">✳</span></div>
      </section>
      <section id="apps" className="apps">
        <div className="section-heading"><h2>Our apps<span className="count">01</span></h2><p>하나씩, 차근차근 만들어갑니다.</p></div>
        <Link href="/example/" className="app-card">
          <div className="app-icon" aria-hidden="true">b.</div>
          <div><p className="eyebrow">PREVIEW</p><h3>새로운 시작</h3><p>서비스 소개 페이지를 준비하고 있어요.</p></div>
          <span className="card-arrow" aria-hidden="true">↗</span>
        </Link>
        <p className="note">현재는 초기 사이트입니다. 앱 소개 및 개인정보처리방침은 서비스별로 추가될 예정입니다.</p>
      </section>
    </>
  );
}
