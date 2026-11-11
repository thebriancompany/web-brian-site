import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BrianText — 광고 없이, 읽기에만 집중',
  description: '꼭 필요한 기능만 담은 텍스트 뷰어 BrianText. 단어 검색부터 글꼴, 글자 크기, 줄 간격, 배경과 글자 색상까지 나에게 편안한 읽기 환경을 만들어 보세요.',
  alternates: { canonical: '/briantext/' },
};

const features = [
  { number: '01', title: '군더더기 없이, 깔끔하게.', description: '텍스트 파일을 한곳에 모으고 최근 읽은 순, 이름 순, 추가 순으로 정리하세요. 읽은 진행률과 파일 크기도 한눈에 확인할 수 있어요.' },
  { number: '02', title: '오직 읽기에만 집중.', description: '광고 없이 깔끔한 읽기 화면에서 글의 흐름에 집중하세요. 소설부터 짧은 글까지, 나만의 읽는 시간을 만들어 보세요.' },
  { number: '03', title: '글꼴도 내 취향대로.', description: '글꼴과 글자 크기, 줄 간격을 편안하게 조절하세요. 미리보기로 확인하며 나에게 맞는 설정을 찾을 수 있어요.' },
  { number: '04', title: '좋아하는 색으로 읽어요.', description: '배경과 글자 색상을 취향에 맞게 선택하세요. 흰색, 크림색, 회색, 검정 등 다양한 조합으로 읽는 분위기를 바꿔 보세요.' },
  { number: '05', title: '원하는 단어를 빠르게.', description: '글 속에서 찾고 싶은 단어를 검색하세요. 강조된 검색어와 주변 문장, 페이지와 진행률을 함께 확인할 수 있어요.' },
  { number: '06', title: '어두운 밤에도 편안하게.', description: '다크 모드로 늦은 밤에도 차분하게 읽으세요. 밝은 화면부터 어두운 화면까지, 읽는 순간에 어울리는 환경을 선택할 수 있어요.' },
];

export default function BrianText() {
  return (
    <>
      <Link className="back-link" href="/#apps">← 모든 앱</Link>
      <section className="text-hero" aria-labelledby="briantext-title">
        <div>
          <p className="eyebrow">BRIANTEXT · TEXT READER</p>
          <h1 id="briantext-title">광고 없이,<br /><span className="accent">읽기에만 집중.</span></h1>
          <p className="intro">꼭 필요한 기능만 담은 텍스트 뷰어, BrianText.<br />나에게 편안한 글꼴과 색상으로<br />오롯이 읽는 시간을 만들어 보세요.</p>
          <a className="button" href="#features">기능 살펴보기 <span aria-hidden="true">↓</span></a>
        </div>
        <div className="reader-preview" aria-label="BrianText의 읽기 설정을 표현한 미리보기">
          <div className="reader-top"><span>BrianText</span><span aria-hidden="true">Aa</span></div>
          <p className="reader-label">나만의 읽는 시간</p>
          <p className="reader-heading">한 문장,<br />그리고 잠깐의 쉼.</p>
          <p className="reader-copy">책장을 넘기듯 천천히 읽어 보세요.<br /><br />나에게 편안한 글꼴과 색상으로<br />읽는 시간을 만들어 보세요.</p>
          <div className="reader-bottom"><span>나에게 맞춘 읽기</span><span className="reader-swatches" aria-hidden="true"><i /><i /><i /></span></div>
          <p className="preview-caption">읽기 화면을 표현한 디자인입니다.</p>
        </div>
      </section>
      <section id="features" className="text-features" aria-labelledby="features-title">
        <p className="eyebrow">SIMPLY READ</p>
        <h2 id="features-title">읽는 데 필요한 만큼만.</h2>
        <p className="intro">복잡한 기능 대신, 매일 쓰는 편안함을 담았어요.</p>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="text-ending"><p className="eyebrow">BRIANTEXT</p><h2>이제, 읽는 시간.</h2><p className="intro">좋아하는 글을 가장 편안한 모습으로 만나보세요.</p><nav className="service-links" aria-label="BrianText 관련 링크"><Link className="back-link" href="/#apps">Brian의 다른 이야기 둘러보기 →</Link><Link className="back-link" href="/briantext/privacy/">개인정보처리방침 →</Link></nav></section>
    </>
  );
}
