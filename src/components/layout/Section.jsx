export default function Section({ children, className = "" }) {
  return (
    <section className={`max-w-[1300px] mx-auto px-4 ${className}`}>{children}</section>
  );
}
