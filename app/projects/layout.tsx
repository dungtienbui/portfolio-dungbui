import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Tien Dung Bui - Project collection',
  description: 'Bộ sư tập tất cả dự án của Dũng',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}