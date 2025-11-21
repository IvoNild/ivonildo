import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function Section({
  title,
  description,
  children,
  className = "",
  titleClassName = "text-[25px] md:text-[35px] font-medium mb-4",
  descriptionClassName = "text-[15px] md:text-[18px] mb-[80px]",
}: SectionProps) {
  return (
    <div className={`max-w-[1000px] mx-auto px-1 ${className}`}>
      {title && <h2 className={titleClassName}>{title}</h2>}
      {description && <p className={descriptionClassName}>{description}</p>}
      <div className="flex flex-wrap justify-between">{children}</div>
      <div className="h-[50px]" />
    </div>
  );
}
