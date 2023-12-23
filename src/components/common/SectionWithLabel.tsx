import { type ComponentProps } from "react";

type Props = {
  title: React.ReactNode;
} & Omit<ComponentProps<"section">, "title">;

const SectionWithLabel = ({ title, children, className }: Props) => {
  return (
    <section className={className}>
      {title}
      {children}
    </section>
  );
};

export default SectionWithLabel;
