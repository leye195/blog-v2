import { cn } from "@/libs/utils";

type TagProps = {
  type?: "normal" | "outline";
  size?: "sm" | "md" | "lg";
  color?: string;
  name: string;
};

const Tag = ({
  name,
  type = "normal",
  color = "black",
  size = "sm",
}: TagProps) => {
  return (
    <div
      className={cn(
        "px-2",
        "rounded-md",
        `text-[var(--color)]`,
        `text-${size}`,
        type === "normal" ? "bg-blue-200" : "bg-white",
        type === "normal"
          ? "border-transparent"
          : "hover:bg-blue-200 border-2 border-blue-200 transition-all"
      )}
      style={{
        "--color": color,
      }}
    >
      {name}
    </div>
  );
};

export default Tag;
