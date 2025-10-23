export default function Container({ children, className = "" }) {
  return (
    <section className={`max-w-[1300px] mx-auto px-4 w-full ${className}`}>{children}</section>
  );
}
