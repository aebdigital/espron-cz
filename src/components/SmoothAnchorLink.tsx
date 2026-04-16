"use client";

type Props = {
  targetId: string;
  className?: string;
  children: React.ReactNode;
};

export default function SmoothAnchorLink({ targetId, className, children }: Props) {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
