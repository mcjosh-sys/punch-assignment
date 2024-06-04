import { cn } from "@/lib/utils"

type Props = {
    children: React.ReactNode,
    className?: string
}

const SectionWrapper = ({children, className}: Props) => {
  return (
      <section className="w-full">
          <div className={cn("max-w-[1400px] h-fit mx-auto", className)}>
              {children}
          </div>
    </section>
  )
}

export default SectionWrapper