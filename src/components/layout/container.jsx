export default function Container({ children, className = '' }) {
  return (
    <section className={`max-w-[1300px] mx-auto w-full ${className} px-[35px] xl:px-0`}>
      {children}
    </section>
  )
}
