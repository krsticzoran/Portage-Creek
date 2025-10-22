export default function Badge({ children = "Badge", className = "" }) {
  return (
    <div
      className={`bg-primary-dark opacity-100 rounded-[23px] border border-white/10 px-5 py-2.5 gap-2.5 flex items-center w-fit ${className}`}
    >
      <div className="w-2 h-2 bg-primary-blue rounded-full mr-3" />
      <p className="font-switzer font-normal text-sm leading-[120%] text-white">{children}</p>
    </div>
  );
}
