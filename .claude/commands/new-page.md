---
description: "Next.js App Router 페이지를 생성합니다"
allowed-tools:
  [
    "Bash(mkdir:*)",
    "Bash(ls:*)",
    "Bash(find:*)",
  ]
---

# Claude 명령어: New Page

Next.js App Router 페이지와 선택적 레이아웃을 생성합니다.

## 사용법

```
/new-page [route-path]
```

예시:
```
/new-page dashboard
/new-page dashboard/settings
/new-page blog/[slug]
```

## 규칙

1. **위치**: `app/[route]/page.tsx` 형식
2. **구조**: `page.tsx` 필수, `layout.tsx` (필요시)
3. **언어**: TypeScript + React
4. **스타일**: Tailwind CSS
5. **export**: `default function Page() {}` 형식

## 생성 예시

### 기본 페이지

```
/new-page dashboard
```

생성 결과:
```
app/dashboard/page.tsx
```

내용:
```tsx
// app/dashboard/page.tsx
export default function Dashboard() {
  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      {/* 콘텐츠 */}
    </main>
  )
}
```

### 중첩 라우트

```
/new-page dashboard/settings
```

생성 결과:
```
app/dashboard/settings/page.tsx
```

### 동적 라우트

```
/new-page blog/[slug]
```

생성 결과:
```
app/blog/[slug]/page.tsx
```

## 프로세스

1. 라우트 경로 파싱
2. `app/` 하위에 필요한 폴더 구조 생성
3. `page.tsx` 파일 생성 (기본 구조 포함)
4. 필요시 `layout.tsx` 생성 확인
5. 생성된 파일 경로 제시

## 참고

- 정적 사이트 export 설정 (`next.config.ts`): 동적 라우트는 주의
- basePath `/claude-starts` 설정됨 (상대 경로 사용)
