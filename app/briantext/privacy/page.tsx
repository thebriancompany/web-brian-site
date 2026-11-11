import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BrianText 개인정보처리방침',
  description: 'BrianText의 개인정보 수집 여부, 외부 SDK 사용 여부 및 개인정보 관련 문의처를 안내합니다.',
  alternates: { canonical: '/briantext/privacy/' },
};

export default function BrianTextPrivacy() {
  return (
    <article className="privacy-page">
      <Link className="back-link" href="/briantext/">← BrianText 소개</Link>
      <header className="privacy-heading">
        <p className="eyebrow">BRIANTEXT · PRIVACY POLICY</p>
        <h1>개인정보처리방침</h1>
        <p className="intro">The Brian Company는 BrianText 이용자의 개인정보를 소중히 여기며, 다음과 같이 개인정보 처리에 관한 사항을 안내합니다.</p>
        <p className="note">시행일: <time dateTime="2026-11-11">2026년 11월 11일</time></p>
      </header>
      <div className="privacy-summary">BrianText는 앱 이용자의 개인정보를 수집하거나 서버에 저장하지 않으며, 외부 SDK를 사용하지 않습니다.</div>
      <section>
        <h2>1. 개인정보의 수집 및 이용</h2>
        <p>BrianText는 앱 이용 과정에서 개인정보를 수집하지 않습니다. 이용자가 읽는 텍스트 파일의 내용이나 읽기 활동을 개발자에게 전송하거나 개발자의 서버에 보관하지 않습니다.</p>
      </section>
      <section>
        <h2>2. 개인정보의 보유 및 파기</h2>
        <p>앱을 통해 수집·보유하는 개인정보가 없으므로, 이에 대한 보유 기간이나 파기 대상은 없습니다. 이메일로 직접 문의하는 경우의 정보 처리는 아래 문의 항목에서 안내합니다.</p>
      </section>
      <section>
        <h2>3. 제3자 제공 및 외부 SDK</h2>
        <p>BrianText는 앱 이용자의 개인정보를 제3자에게 제공하거나 개인정보 처리를 위탁하지 않습니다. 광고, 이용 분석, 오류 수집 등을 위한 외부 SDK를 사용하지 않으며, 광고 목적의 이용자 추적을 하지 않습니다.</p>
      </section>
      <section>
        <h2>4. 개인정보 관련 문의</h2>
        <p>개인정보 관련 질문이나 요청은 아래 이메일로 보내 주세요.</p>
        <dl className="privacy-contact">
          <div><dt>운영자</dt><dd>The Brian Company</dd></div>
          <div><dt>이메일</dt><dd><a href="mailto:hogumachu@gmail.com">hogumachu@gmail.com</a></dd></div>
        </dl>
        <p>이메일 문의 시 이용자가 직접 제공하는 이메일 주소와 문의 내용은 문의 응대 목적으로만 이용하며, 문의 처리가 완료되면 지체 없이 삭제합니다. 다만, 관계 법령에 따라 보관이 필요한 경우 해당 기간 동안 보관합니다. 문의 내용의 삭제를 원하는 경우 위 이메일로 요청할 수 있습니다.</p>
        <p>문의 시 답변에 필요한 내용만 보내 주시고, 민감한 개인정보나 읽고 있는 파일의 전체 내용을 보내지 않도록 유의해 주세요.</p>
      </section>
      <section>
        <h2>5. 개인정보처리방침의 변경</h2>
        <p>앱의 기능이나 개인정보 처리 방식이 변경되는 경우 이 페이지를 통해 변경된 개인정보처리방침과 시행일을 안내합니다.</p>
      </section>
    </article>
  );
}
