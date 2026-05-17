# usehooks-ts 훅 사용 가이드

이 프로젝트에서는 `usehooks-ts` 라이브러리의 검증된 React 훅들을 활용합니다.

> **usehooks-ts란?** 
> 실전 React 애플리케이션에서 자주 사용되는 커스텀 훅들을 제공하는 라이브러리입니다.
> 바퀴를 재발명하지 않고 검증된 솔루션을 사용할 수 있습니다.
> 공식 문서: https://usehooks-ts.com/

## 설치된 훅들

모든 훅은 `@/hooks`에서 import할 수 있습니다.

```typescript
import { useMediaQuery, useLocalStorage, useWindowSize } from '@/hooks'
```

---

## 카테고리별 훅들

### 🎨 반응형 & UI
- `useMediaQuery` - 미디어 쿼리 감지
- `useWindowSize` - 윈도우 크기 감지
- `useScreen` - 화면 정보 감지
- `useHover` - 호버 상태 감지
- `useClickAnyWhere` - 문서 어디든 클릭 감지
- `useOnClickOutside` - 요소 외부 클릭 감지

### 💾 데이터 지속성
- `useLocalStorage` - 로컬 스토리지 관리
- `useSessionStorage` - 세션 스토리지 관리
- `useReadLocalStorage` - 로컬 스토리지 읽기 (읽기 전용)

### 🎯 상태 관리
- `useToggle` - 부울 값 토글
- `useBoolean` - 부울 값 관리
- `useCounter` - 카운터 상태 관리
- `useStep` - 단계별 진행 상태
- `useMap` - Map 데이터 구조 관리

### ⏱️ 타이밍 & 디바운싱
- `useTimeout` - setTimeout 안전 래퍼
- `useInterval` - setInterval 안전 래퍼
- `useCountdown` - 카운트다운 타이머
- `useDebounceValue` - 값 디바운싱
- `useDebounceCallback` - 콜백 디바운싱

### 📋 컨텐츠
- `useCopyToClipboard` - 클립보드 복사
- `useDocumentTitle` - 문서 제목 관리

### 🌐 DOM & 레이아웃
- `useIntersectionObserver` - 교차 관찰 (무한 스크롤 등)
- `useResizeObserver` - 요소 크기 변화 감시
- `useScrollLock` - 스크롤 잠금

### 🌙 다크모드
- `useDarkMode` - 다크모드 관리 (localStorage 기반)
- `useTernaryDarkMode` - 3가지 상태 다크모드 (light/dark/system)

### 🔧 유틸리티
- `useIsClient` - 클라이언트 렌더링 여부 확인
- `useIsMounted` - 컴포넌트 마운트 여부 확인
- `useEventListener` - 이벤트 리스너 안전 관리
- `useEventCallback` - 이벤트 콜백 관리
- `useScript` - 스크립트 로딩 관리
- `useUnmount` - 언마운트 시점에 실행
- `useIsomorphicLayoutEffect` - 서버/클라이언트 호환 효과

---

## 자주 사용되는 훅들

### 1. `useMediaQuery` - 미디어 쿼리 감지 (반응형)

화면 크기나 미디어 쿼리 조건을 감지합니다.

```typescript
import { useMediaQuery } from '@/hooks'

export function MyComponent() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const isDark = useMediaQuery('(prefers-color-scheme: dark)')

  return (
    <div>
      {isDesktop ? '데스크톱 보기' : '모바일 보기'}
    </div>
  )
}
```

**사용 예제:**
- 반응형 레이아웃 변경
- 화면 크기별 동적 렌더링
- 다크모드 감지 (OS 설정)

---

### 2. `useLocalStorage` - 로컬 스토리지 관리

상태를 localStorage에 자동으로 저장합니다.

```typescript
import { useLocalStorage } from '@/hooks'

export function Preferences() {
  const [sidebarOpen, setSidebarOpen] = useLocalStorage('sidebar-open', true)
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  return (
    <button onClick={() => setSidebarOpen(!sidebarOpen)}>
      사이드바 토글
    </button>
  )
}
```

**특징:**
- 페이지 새로고침 후에도 상태 유지
- 타입 안전 (제네릭 지원)
- SSR 안전

---


### 4. `useWindowSize` - 윈도우 크기 감지

창의 너비와 높이를 추적합니다.

```typescript
import { useWindowSize } from '@/hooks'

export function ResponsiveComponent() {
  const { width, height } = useWindowSize()

  return (
    <div>
      화면 크기: {width} x {height}
    </div>
  )
}
```

**활용:**
- 반응형 레이아웃 동적 계산
- 큰 이미지 최적화 로딩
- 무한 스크롤 구현

---

### 5. `useToggle` - 부울 값 토글

true/false 값을 쉽게 토글할 수 있습니다.

```typescript
import { useToggle } from '@/hooks'

export function Modal() {
  const [isOpen, toggle] = useToggle(false)

  return (
    <>
      <button onClick={toggle}>열기/닫기</button>
      {isOpen && <Modal />}
    </>
  )
}
```

---

### 6. `useDebounceValue` - 값 디바운싱

값이 변경되어도 지정된 지연 시간 후에 반영됩니다. 검색창 등에 유용합니다.

```typescript
import { useDebounceValue } from '@/hooks'
import { useState } from 'react'

export function SearchUsers() {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm] = useDebounceValue(searchTerm, 500)

  // debouncedSearchTerm은 500ms 후에 업데이트됨
  useEffect(() => {
    if (debouncedSearchTerm) {
      // API 호출
      fetchUsers(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="사용자 검색..."
    />
  )
}
```

**프로젝트 활용:**
- 검색 기능의 API 호출 최적화
- 자동 저장 기능

---

### 7. `useCopyToClipboard` - 클립보드 복사

텍스트를 클립보드에 복사합니다.

```typescript
import { useCopyToClipboard } from '@/hooks'

export function CopyButton({ text }) {
  const [, copy] = useCopyToClipboard()
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await copy(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button onClick={handleCopy}>
      {copied ? '복사됨!' : '복사'}
    </button>
  )
}
```

---

### 8. `useInterval` - 반복 실행

setInterval을 안전하게 사용합니다.

```typescript
import { useInterval } from '@/hooks'
import { useState } from 'react'

export function Timer() {
  const [count, setCount] = useState(0)

  useInterval(() => {
    setCount(c => c + 1)
  }, 1000)

  return <div>{count}초 경과</div>
}
```

**특징:**
- 컴포넌트 언마운트 시 자동 정리
- 동적으로 활성화/비활성화 가능

---

### 9. `useTimeout` - 지연 실행

setTimeout을 안전하게 사용합니다.

```typescript
import { useTimeout } from '@/hooks'
import { useState } from 'react'

export function Toast() {
  const [visible, setVisible] = useState(true)

  useTimeout(() => {
    setVisible(false)
  }, 3000)

  return visible && <div className="toast">3초 후 사라집니다</div>
}
```

**프로젝트 활용:**
- 토스트 메시지 자동 닫기
- 모달 자동 닫기
- 타이밍 기반 UI 업데이트

---

### 10. `useOnClickOutside` - 외부 클릭 감지

요소 외부의 클릭을 감지합니다.

```typescript
import { useOnClickOutside } from '@/hooks'
import { useRef, useState } from 'react'

export function Dropdown() {
  const ref = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  useOnClickOutside(ref, () => setIsOpen(false))

  return (
    <div ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>
        메뉴
      </button>
      {isOpen && <Menu />}
    </div>
  )
}
```

**프로젝트 활용:**
- 드롭다운 메뉴 닫기
- 모달 배경 클릭으로 닫기
- 팝오버 자동 닫기

---

### 11. `useIntersectionObserver` - 교차 관찰

요소가 뷰포트에 들어오는 시점을 감지합니다. 무한 스크롤에 유용합니다.

```typescript
import { useIntersectionObserver } from '@/hooks'
import { useRef, useState } from 'react'

export function InfiniteList() {
  const ref = useRef(null)
  const { isVisible } = useIntersectionObserver(ref)

  useState(() => {
    if (isVisible) {
      loadMore()
    }
  }, [isVisible])

  return (
    <>
      <div>리스트 내용</div>
      <div ref={ref}>로드 중...</div>
    </>
  )
}
```

**활용:**
- 무한 스크롤 구현
- Lazy 로딩
- 광고 노출 추적

---

### 12. `useCounter` - 카운터 관리

증가, 감소, 리셋 기능이 있는 카운터를 관리합니다.

```typescript
import { useCounter } from '@/hooks'

export function Counter() {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>리셋</button>
    </div>
  )
}
```

---

## 모범 사례

### ✅ DO (권장)

```typescript
// usehooks-ts의 검증된 훅 사용
import { useMediaQuery, useLocalStorage } from '@/hooks'

function MyComponent() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const [preferences, setPreferences] = useLocalStorage('prefs', {})

  return <div>{isMobile ? '모바일 보기' : '데스크톱 보기'}</div>
}
```

### ❌ DON'T (비추천)

```typescript
// ❌ 직접 구현 대신 라이브러리 사용하세요
// usehooks-ts의 훅들은 이미 에러 처리와 최적화가 포함됨

// ❌ 이런 식으로 직접 작성하지 마세요
const [width, setWidth] = useState(0)
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth)
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [])

// ✅ 대신 useWindowSize를 사용하세요
const { width } = useWindowSize()
```

---

## 추가 리소스

- [usehooks-ts 공식 문서](https://usehooks-ts.com/) - 모든 훅의 최신 정보
- [React Hooks 공식 문서](https://react.dev/reference/react) - React 기본 개념
- [Next.js 문서](https://nextjs.org/) - 프레임워크 정보

---

## 프로젝트에서의 활용

### 현재 사용 중인 훅들

- **Header.tsx**: `useMediaQuery` - 반응형 네비게이션
- **전체 프로젝트**: `@/hooks`에서 모든 훅 임포트 가능

### 추천하는 향후 활용 아이디어

| 기능 | 추천 훅 | 설명 |
|------|--------|------|
| 검색 기능 | `useDebounceValue` | API 호출 최적화 |
| 무한 스크롤 | `useIntersectionObserver` | 요소 뷰포트 감지 |
| 폼 자동 저장 | `useLocalStorage` | 입력값 지속성 |
| 다크모드 토글 | `useDarkMode` | 테마 상태 관리 |
| 모달/드롭다운 | `useToggle` | 상태 관리 |
| 외부 클릭 감지 | `useOnClickOutside` | 자동 닫기 |
| 타이머/카운트다운 | `useInterval` / `useTimeout` | 시간 기반 기능 |
| 클립보드 복사 | `useCopyToClipboard` | 텍스트 복사 기능 |

---

## 빠른 시작 템플릿

다음 패턴으로 쉽게 시작할 수 있습니다:

```typescript
import { useMediaQuery, useLocalStorage, useToggle } from '@/hooks'
import { useState } from 'react'

export function MyComponent() {
  // 반응형 감지
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  // 상태 지속성
  const [settings, setSettings] = useLocalStorage('settings', {})
  
  // 토글 상태
  const [isOpen, toggleOpen] = useToggle(false)
  
  return (
    <div>
      {isMobile ? '모바일' : '데스크톱'}
      <button onClick={toggleOpen}>토글</button>
    </div>
  )
}
```
