import { icons, type LucideProps } from 'lucide-react'

interface DynamicIconProps extends LucideProps {
  name: string
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const LucideIcon = (icons as Record<string, React.FC<LucideProps>>)[name] || icons.BookOpen

  return <LucideIcon {...props} />
}
