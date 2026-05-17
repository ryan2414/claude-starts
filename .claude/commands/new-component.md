---
description: "shadcn/ui 스타일의 새로운 React 컴포넌트를 생성합니다"
allowed-tools:
  [
    "Bash(find:*)",
    "Bash(ls:*)",
  ]
---

# Claude 명령어: New Component

shadcn/ui 스타일의 새로운 React 컴포넌트를 생성합니다.

## 사용법

```
/new-component [component-name]
```

예시:
```
/new-component UserCard
/new-component LoginForm
/new-component ProductGrid
```

## 규칙

1. **위치**: `components/` 디렉토리에 생성
2. **언어**: TypeScript + Props 인터페이스
3. **스타일**: Tailwind CSS + `cn()` 함수 사용 (`lib/utils`에서 import)
4. **UI**: shadcn/ui 컴포넌트 활용 가능 (`components/ui/`)
5. **아이콘**: Lucide React 사용 (`import { IconName } from 'lucide-react'`)
6. **Client/Server**: 필요시 명시적으로 `'use client'` 추가

## 생성 예시

```tsx
// components/UserCard.tsx
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { User } from 'lucide-react'

interface UserCardProps {
  name: string
  role: string
  isActive?: boolean
  className?: string
}

export function UserCard({ name, role, isActive, className }: UserCardProps) {
  return (
    <Card className={cn('', className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{role}</p>
        {isActive && <Badge className="mt-2">Active</Badge>}
      </CardContent>
    </Card>
  )
}
```

## 프로세스

1. 컴포넌트 이름 파싱
2. `components/` 내 적절한 하위 디렉토리 결정 (필요시)
3. TypeScript Props 인터페이스 포함한 컴포넌트 파일 생성
4. Tailwind + shadcn/ui 패턴 적용
5. 생성된 파일 경로와 사용 예시 제시
