---
description: "React Hook Form + Zod 폼 컴포넌트를 생성합니다"
allowed-tools:
  [
    "Bash(find:*)",
    "Bash(ls:*)",
  ]
---

# Claude 명령어: Form

React Hook Form + Zod 조합의 폼 컴포넌트를 생성합니다.

## 사용법

```
/form [form-name] [fields]
```

예시:
```
/form LoginForm email, password
/form SignupForm name, email, password, confirmPassword
/form ContactForm name, email, message
/form 사용자정보 이름, 이메일, 전화번호
```

## 규칙

1. **위치**: `components/` 디렉토리 (또는 적절한 하위 디렉토리)
2. **라이브러리**:
   - `react-hook-form`: 폼 상태 관리
   - `@hookform/resolvers/zod`: Zod 검증 통합
   - `zod`: 스키마 & 타입 안전 검증
   - `sonner`: Toast 알림
3. **UI**: shadcn/ui Form 컴포넌트
4. **구조**:
   - Zod 스키마 정의 (검증 규칙)
   - Props 인터페이스
   - `useForm()` 훅 사용
   - `shadcn/ui` Form 컴포넌트 활용
   - 성공/에러 Toast 피드백

## 생성 예시

```tsx
// components/LoginForm.tsx
'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  email: z.string().email('유효한 이메일을 입력하세요'),
  password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다'),
})

type FormValues = z.infer<typeof formSchema>

interface LoginFormProps {
  onSubmit?: (data: FormValues) => void | Promise<void>
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function handleSubmit(values: FormValues) {
    try {
      if (onSubmit) {
        await onSubmit(values)
      }
      toast.success('로그인 성공')
      form.reset()
    } catch (error) {
      toast.error('로그인 실패')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input type="email" placeholder="example@mail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input type="password" placeholder="•••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          로그인
        </Button>
      </form>
    </Form>
  )
}
```

## Zod 스키마 자주 사용하는 패턴

```ts
z.object({
  // 기본 타입
  name: z.string().min(1, '필수입니다'),
  email: z.string().email('유효한 이메일'),
  age: z.number().min(18, '18세 이상이어야 합니다'),

  // 선택 필드
  phone: z.string().optional(),

  // 배열
  tags: z.array(z.string()),

  // 조건부 검증
  password: z.string().min(8),
  confirmPassword: z.string(),
  // .refine((data) => data.password === data.confirmPassword, {
  //   message: '비밀번호가 일치하지 않습니다',
  // })
})
```

## 프로세스

1. 폼 이름 & 필드 파싱
2. Zod 스키마 생성 (필드별 검증 규칙)
3. TypeScript 타입 추론 (`z.infer`)
4. `useForm()` + `zodResolver` 설정
5. shadcn/ui Form 컴포넌트로 필드 렌더링
6. Toast 피드백 추가
7. Props 인터페이스로 외부 `onSubmit` 콜백 지원

## 참고

- `'use client'` 필수 (React Hook Form은 Client Component)
- 모든 필드는 자동 검증 및 에러 메시지 표시
- Toast는 `sonner` 라이브러리 사용
