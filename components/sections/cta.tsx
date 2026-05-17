import { Button } from '@/components/ui/button'

export function Cta() {
  return (
    <section id="cta" className="w-full py-20 md:py-32 bg-linear-to-br from-primary/5 via-background to-secondary/5 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* 제목 */}
        <h2 className="text-3xl md:text-5xl font-bold text-foreground">
          지금 바로 시작하세요
        </h2>

        {/* 설명 */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          완전한 스타터킷으로 몇 분 안에 프로젝트를 시작할 수 있습니다.
          <br />
          모든 것이 이미 설정되어 있어서 개발에만 집중할 수 있습니다.
        </p>

        {/* 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="rounded-lg h-12 px-8"
          >
            지금 시작하기
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-lg h-12 px-8"
          >
            더 알아보기
          </Button>
        </div>

        {/* 부가 텍스트 */}
        <p className="text-sm text-muted-foreground pt-8">
          추가 설치나 설정 없이 바로 사용 가능합니다. MIT 라이선스로 자유롭게 사용하세요.
        </p>
      </div>
    </section>
  )
}
