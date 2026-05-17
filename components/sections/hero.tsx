import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          {/* 배지 */}
          <Badge variant="secondary" className="mx-auto">
            ✨ 새로운 스타터킷이 출시되었습니다
          </Badge>

          {/* 제목 */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              모던 웹 개발
            </span>
            <br />
            지금 시작하세요
          </h1>

          {/* 서브타이틀 */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Next.js, React, TypeScript, Tailwind CSS, shadcn/ui로 구성된
            <br />
            빠르고 효율적인 웹 스타터킷. 바로 시작할 준비가 되어있습니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="rounded-lg h-12 px-8">
              시작하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg h-12 px-8"
            >
              문서 보기
            </Button>
          </div>

          {/* 통계 */}
          <div className="pt-8 flex justify-center gap-8 border-t border-border/50">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold">100+</p>
              <p className="text-sm text-muted-foreground">사용자</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold">⚡</p>
              <p className="text-sm text-muted-foreground">초고속</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold">∞</p>
              <p className="text-sm text-muted-foreground">확장성</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
