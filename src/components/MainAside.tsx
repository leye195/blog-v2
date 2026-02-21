import { Suspense } from 'react';
import Link from 'next/link';
import { getTags } from '@/apis';
import { GitHub, Email } from '@/components/icon';



const CategoryList = async () => {
  const tags = await getTags();

  return (
    <div className="flex flex-wrap gap-[12px]">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/posts?category=${tag}`}
          className="bg-white border border-[#e2e8f0] px-[17px] py-[9px] rounded-[12px] flex items-center gap-2 hover:border-blue-500 transition-colors group"
        >
          <span className="text-[14px] font-medium text-[#0f172a]">{tag}</span>
        </Link>
      ))}
    </div>
  );
};

const Categories = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-[14px] font-bold text-[#94a3b8] tracking-[1.4px] uppercase">Categories</h3>
      <Suspense fallback={<div className="h-20 bg-slate-100 animate-pulse rounded-xl" />}>
        <CategoryList />
      </Suspense>
    </div>
  );
};

const MainAside = () => {
  return (
    <aside className="hidden lg:flex flex-col gap-10 w-full max-w-[336px] shrink-0">
      <Categories />
    </aside>
  );
};

export default MainAside;
