import { Separator } from '@/components/ui/separator'

const footerSections = [
  {
    title: '제품',
    links: [
      { label: '기능', href: '#' },
      { label: '가격', href: '#' },
      { label: '보안', href: '#' },
    ],
  },
  {
    title: '리소스',
    links: [
      { label: '문서', href: '#' },
      { label: '블로그', href: '#' },
      { label: '커뮤니티', href: '#' },
    ],
  },
  {
    title: '회사',
    links: [
      { label: '소개', href: '#' },
      { label: '채용', href: '#' },
      { label: '연락처', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 로고 & 설명 */}
          <div className="md:col-span-1">
            <div className="flex items-center font-bold text-lg mb-2">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center mr-2">
                W
              </div>
              WebKit
            </div>
            <p className="text-sm text-muted-foreground">
              빠른 웹 개발을 위한 모던 스타터킷
            </p>
          </div>

          {/* 링크 섹션 */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* 저작권 */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2024 WebKit. 모든 권리 보유.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">
              개인정보
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
