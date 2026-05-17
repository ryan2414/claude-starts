import { Separator } from '@/components/ui/separator'

const stats = [
  {
    number: '50+',
    label: '설치된 컴포넌트',
  },
  {
    number: '100%',
    label: 'TypeScript',
  },
  {
    number: '< 3s',
    label: '초기 로딩 시간',
  },
  {
    number: '0',
    label: 'Technical Debt',
  },
]

export function Stats() {
  return (
    <section id="stats" className="w-full py-20 md:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
