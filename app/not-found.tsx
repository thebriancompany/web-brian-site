import Link from 'next/link';
export default function NotFound() {
  return <section className="detail"><p className="eyebrow">404</p><h1>페이지를 찾을 수 없어요.</h1><p className="intro">주소를 확인하거나 홈에서 다시 시작해 주세요.</p><Link className="button" href="/">홈으로 돌아가기</Link></section>;
}
