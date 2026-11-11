# Brian 웹사이트

React + Next.js + TypeScript 기반 정적 사이트. 소스는 private 저장소에 보관하고, 빌드된 `out/`만 `thebriancompany/thebriancompany.github.io`의 `main` 브랜치에 배포합니다. 별도 Node.js 서버는 필요하지 않습니다.

## 로컬 개발

Node.js 22 이상을 사용합니다.

```sh
npm install
npm run dev
```

http://localhost:3000 에서 확인합니다.

```sh
npm run typecheck
npm run build
```

빌드 결과는 `out/`입니다. `output: 'export'`와 `trailingSlash: true`로 각 경로가 `경로/index.html`로 생성되어 GitHub Pages에서 직접 접속 및 새로고침할 수 있습니다. 사용자/조직 사이트이므로 `basePath`는 설정하지 않습니다.

## 첫 배포 설정

1. 대상 저장소 `thebriancompany/thebriancompany.github.io`에 **main 브랜치가 존재**해야 합니다. 빈 저장소라면 README 등으로 먼저 초기화합니다.
2. 대상 저장소 Settings → Pages → Build and deployment에서 **Deploy from a branch**, **main**, **/ (root)**를 선택합니다.
3. 대상 저장소에 접근 가능한 fine-grained Personal Access Token을 생성합니다. Resource owner는 `thebriancompany`, Repository access는 `thebriancompany.github.io`만 선택하고 Repository permissions → **Contents: Read and write**를 부여합니다. 조직 정책에 따라 토큰 승인이 필요할 수 있습니다.
4. **소스 저장소** `web-brian-site`의 Settings → Secrets and variables → Actions에 이름이 **PAT**인 repository secret을 추가합니다. 값은 위 토큰입니다. 기본 `GITHUB_TOKEN`은 다른 저장소에 push하는 용도로 사용할 수 없습니다.
5. 소스를 `main`에 push/merge하면 Deploy workflow가 실행됩니다. 또는 Actions → Deploy → Run workflow로 수동 실행합니다.
6. 소스의 Deploy workflow 성공 후 대상 저장소의 Pages 배포도 성공했는지 확인합니다.

확인할 주소:

- https://thebriancompany.github.io/
- https://thebriancompany.github.io/briantext/ (BrianText 서비스 소개)
- https://thebriancompany.github.io/example/ (경로 직접 접속/새로고침 확인용)
- https://thebriancompany.github.io/not-a-page/ (404 확인용)

대상 저장소는 배포 산출물 전용으로 사용합니다. 동기화 시 `.git/`, `.github/`, `CNAME`을 제외한 기존 파일은 빌드 결과로 교체/삭제됩니다. `.nojekyll`은 Next.js의 `_next/` 파일이 그대로 제공되도록 포함합니다. 소스에서 실행하는 workflow와 대상 Pages의 branch 배포는 별도 단계입니다.

## 서비스 추가

- `app/<서비스명>/page.tsx`: 서비스 소개 → `/<서비스명>/`
- `app/<서비스명>/privacy/page.tsx`: 해당 앱의 실제 데이터 처리에 맞는 개인정보처리방침 → `/<서비스명>/privacy/`
- `app/<서비스명>/support/page.tsx`: 지원 안내 → `/<서비스명>/support/`
- `app/page.tsx`: 홈의 앱 목록

`example`은 배포 확인용이며 실제 출시 앱이 아닙니다. 앱 등록 시 교체/삭제하세요. 개인정보처리방침은 앱별 수집 항목, 외부 SDK 및 문의처를 확인한 후 작성합니다.

## BrianText

홈의 앱 목록과 `/briantext/`에서 BrianText를 소개합니다. 제공된 App Store 자료를 바탕으로 광고 없는 읽기, 파일 정렬, 검색, 글꼴·색상 설정 및 다크 모드를 안내합니다. 페이지의 읽기 미리보기는 HTML/CSS로 표현한 디자인이며 실제 앱 스크린샷이 아닙니다.

App Store URL은 확인 후 다운로드 링크로 추가해야 합니다. `/briantext/privacy/`에 개인정보처리방침을 제공하며 소개 페이지에서 연결합니다. 앱에서 개인정보를 수집·서버 저장하지 않고 외부 SDK를 사용하지 않는다는 운영자 확인 내용을 반영했습니다. 문의처는 `hogumachu@gmail.com`이며, 직접 보내는 이메일 문의 정보는 앱 내 수집과 구분하여 안내합니다. 지원 페이지는 추후 추가합니다.

## 초기 환경 검증 상태

작성 환경에서 npm registry DNS 연결이 차단되어 의존성 설치 및 빌드는 실행하지 못했습니다. 첫 설치 후 생성되는 `package-lock.json`을 커밋하세요. Action은 lockfile이 있으면 `npm ci`, 없으면 `npm install`을 실행합니다. 최상위 의존성은 정확한 버전으로 고정했습니다.
