export default function Container({ children, className = "" }) {
  return (
    <section className={`max-w-[1300px] mx-auto w-full ${className}`}>{children}</section>
  );
}
