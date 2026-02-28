# Tailwind v4 Coding Pattern for Dan DevLog (v2)

This document provides a guide for utilizing project-specific tokens and patterns when converting Figma designs into Tailwind v4 classes for the Dan DevLog (v2) project.

## 1. Theme Variables and Token System

The project uses CSS variables configured in the Tailwind v4 `@theme` directive within `src/styles/globals.css`. 
Do **not** use arbitrary HEX colors like `text-[#171717]`. Always map them to the closest following semantic tokens:

### Color Tokens
- **Gray Scale**: `gray-100` to `gray-900`
  - *Example classes*: `text-gray-900`, `bg-gray-100`, `border-gray-200`
- **Dark Gray Scale (dgray)**: `dgray-100` to `dgray-900`
  - *Example classes*: `text-dgray-600`, `bg-dgray-800`
- **Primary / Brand Colors**: 
  - `primary` (#3772ff) -> `text-primary`, `bg-primary`
  - `primary-100`, `primary-200`, `primary-300`
- **Other Accents**: `red-100`, `red-500`, `blue-200`, `blue-400`, `green`, `green-2`, `purple`, `yellow`, `yellow-100`
- **Base / Monochromes**: `white`, `black`, `white-15`, `white-30`, etc.

### Typography
The project utilizes the `Pretendard` font natively loaded. No extra custom font family classes are needed unless deviating from the base layer.
Utilize standard Tailwind text sizes (`text-sm`, `text-base`, `text-lg`, `text-xl`, etc.) and font weights (`font-medium`, `font-semibold`, `font-bold`).

## 2. Layout & Component System

### `Flex` Component
Instead of writing native `<div className="flex flex-col gap-4 items-center justify-center">`, you MUST use the custom `Flex` component (`src/components/common/Flex.tsx`):
- Direction: `$direction="column" | "row"` (default is row)
- Gap: `$gap={number}` (e.g., `$gap={16}`)
- Alignment: `$alignItems="center" | "flex-start"`, `$justifyContent="space-between" | "center"`

### `Button` Component
Use `src/components/common/Button.tsx`. Additional styles should be merged using the `className` prop, which automatically processes through `cn()`.

### `cn()` Utility
Use `import { cn } from '@/libs/utils';` when combining conditional classes or passing custom class names into a component to correctly merge Tailwind classes without conflicts.

## 3. Code Conversion Example

**Figma Design Goal:**
- Container: Border, Gray-100 Background, Column Layout, 16px Gap
- Text: Title (Gray-900, 18px, Bold), Subtitle (dgray-400, 14px)
- Button: Primary Background, White Text

**Converted Code:**
```tsx
import Flex from '@/components/common/Flex';
import Button from '@/components/common/Button';
import { cn } from '@/libs/utils';

interface CardProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function InfoCard({ title, subtitle, className }: CardProps) {
  return (
    <Flex 
      $direction="column" 
      $gap={16} 
      className={cn("rounded-xl border border-gray-200 bg-gray-100 p-6", className)}
    >
      <Flex $direction="column" $gap={4}>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <span className="text-sm text-dgray-400">{subtitle}</span>
      </Flex>
      <Button className="bg-primary text-white hover:opacity-90">
        Confirm
      </Button>
    </Flex>
  );
}
```
