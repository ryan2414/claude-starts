import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Zap,
  Code2,
  Palette,
  Shield,
  Smartphone,
  Settings,
} from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '초고속 성능',
    description: 'Next.js 16의 최신 기능으로 최적화된 빠른 페이지 로딩',
  },
  {
    icon: Code2,
    title: '완전한 TypeScript',
    description: '엄격한 타입 체킹으로 개발 중 버그를 사전에 방지',
  },
  {
    icon: Palette,
    title: 'shadcn/ui',
    description: '아름답고 커스터마이저 가능한 UI 컴포넌트 라이브러리',
  },
  {
    icon: Shield,
    title: '보안 기본값',
    description: 'Next.js의 보안 기능과 모범 사례가 내장',
  },
  {
    icon: Smartphone,
    title: '반응형 디자인',
    description: 'Tailwind CSS로 모든 화면 크기에 완벽 대응',
  },
  {
    icon: Settings,
    title: '쉬운 커스터마이징',
    description: '프로젝트에 맞게 쉽게 수정하고 확장 가능',
  },
]

export function Features() {
  return (
    <section id="features" className="w-full py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mx-auto">
            주요 기능
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            모든 것을 포함했습니다
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            모던 웹 개발에 필요한 모든 도구와 기능을 기본으로 제공합니다
          </p>
        </div>

        {/* 기능 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-border/50 hover:border-border transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
