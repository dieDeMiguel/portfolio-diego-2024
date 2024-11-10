

export default function Container({
  children,
  extraClasses = '',
}: {
  children: React.ReactNode
  extraClasses?: string
  dottedBg?: boolean
}) {
  return (
    <div
      className={`max-w-6xl mx-auto my-12 relative p-6 md:p-8 rounded-2xl shadow-md border border-black mb-6 bg-[var(--acid)] ${extraClasses}`}
    >
      {children}
    </div>
  )
}
