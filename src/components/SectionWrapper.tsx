
type Props = {
    children: React.ReactNode
}

const SectionWrapper = ({children}: Props) => {
  return (
      <section className="w-full">
          <div className="max-w-[1400px] mx-auto">
              {children}
          </div>
    </section>
  )
}

export default SectionWrapper