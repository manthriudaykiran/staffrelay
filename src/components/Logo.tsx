export function Logo({
  light = false,
  size = "md",
}: {
  light?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className="flex items-center gap-2.5 select-none">
      <div
        className={`${iconSizes[size]} rounded-xl bg-[#FFB020] flex items-center justify-center shadow-sm shrink-0`}
      >
        <svg
          className="w-5 h-5 text-[#18181B]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {/* Stylized S and relay node */}
          <path d="M7 8.5C7 6.8 8.4 5.5 10.2 5.5H13.8C15.6 5.5 17 6.8 17 8.5C17 10.2 15.6 11.5 13.8 11.5H10.2C8.4 11.5 7 12.8 7 14.5C7 16.2 8.4 17.5 10.2 17.5H13.8C15.6 17.5 17 16.2 17 14.5" />
          <circle cx="17" cy="8.5" r="1.5" fill="#18181B" />
        </svg>
      </div>
      <span
        className={`font-['Space_Grotesk'] font-bold tracking-tight whitespace-nowrap ${textSizes[size]} ${
          light ? "text-white" : "text-[#18181B]"
        }`}
      >
        StaffRelay
      </span>
    </div>
  );
}
