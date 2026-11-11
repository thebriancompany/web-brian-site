import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://thebriancompany.github.io'),
  title: { default: 'Brian — 작은 아이디어, 더 나은 일상', template: '%s | Brian' },
  description: 'Brian이 만드는 앱과 서비스의 공식 웹사이트입니다.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <header className="header wrap">
          <Link className="brand" href="/" aria-label="Brian 홈"><span className="mark">b.</span>Brian<span className="brand-dot">®</span></Link>
          <nav aria-label="주 메뉴"><Link href="/#apps">Our apps <span aria-hidden="true">↗</span></Link></nav>
        </header>
        <main className="wrap">{children}</main>
        <footer className="wrap footer"><span>© {new Date().getFullYear()} The Brian Company</span><span>작은 아이디어에서 시작합니다.</span></footer>
      </body>
    </html>
  );
}
