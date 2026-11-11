import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = { title: '서비스 페이지 미리보기', robots: { index: false, follow: false } };
export default function Example() {
  return <section className="detail"><p className="eyebrow">SERVICE PREVIEW</p><h1>새로운 시작을<br />준비하고 있어요.</h1><p className="intro">이 페이지는 서비스별 주소의 동작을 확인하기 위한 예시입니다.<br />앞으로 각 앱의 소개, 지원 정보, 개인정보처리방침이 이곳에 모입니다.</p><Link className="button" href="/">홈으로 돌아가기 <span aria-hidden="true">↗</span></Link></section>;
}
