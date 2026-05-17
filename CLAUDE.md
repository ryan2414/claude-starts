# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## 명령어

### 개발 & 빌드

```bash
npm run dev      # 개발 서버 시작 (http://localhost:3000)
npm run build    # 프로덕션 빌드 (정적 사이트 생성)
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

## 아키텍처

### 프로젝트 개요

- **배포**: 정적 사이트 export (`next.config.ts`: `output: 'export'`)
- **기본 경로**: GitHub Pages `/claude-starts` 경로 (`basePath: '/claude-starts'`)
- **라우팅**: App Router (단일 랜딩 페이지)

### 컴포넌트 구조

```
components/
├── layout/          # 헤더, 푸터 등 페이지 레이아웃
│   ├── header.tsx   # 반응형 네비, 다크모드 토글 (Client Component)
│   ├── footer.tsx   # 4컬럼 푸터
│   └── toaster.tsx  # sonner 토스트 래퍼 (Client Component)
├── sections/        # Hero, Features, Stats, CTA 섹션
│   └── *.tsx        # 각 섹션 컴포넌트 (대부분 Server Component)
└── ui/              # shadcn/ui 컴포넌트 (20개+)
```

### 주요 패턴

1. **className 유틸**: `lib/utils.ts`의 `cn()` 함수 사용
   ```ts
   import { cn } from '@/lib/utils'
   export function Component() {
     return <div className={cn('base', isActive && 'active')} />
   }
   ```

2. **Hooks**: `hooks/index.ts`에서 `usehooks-ts` 27개 훅 재내보내기
   ```ts
   import { useMediaQuery, useToggle, useLocalStorage } from '@/hooks'
   ```

3. **Client/Server 구분**: `'use client'` 지시자로 명시적 표시
   - Client: Header, Toaster (상호작용, 훅 필요)
   - Server: Sections, Footer (콘텐츠 렌더링)

4. **테마**: `next-themes` + `ThemeProvider` (루트 레이아웃)
   - 사용: `import { useTheme } from 'next-themes'`

5. **UI**: shadcn/ui 기본 컴포넌트 + Tailwind CSS v4
   - Lucide React 아이콘: `import { IconName } from 'lucide-react'`
   - Toast: `import { toast } from 'sonner'`
