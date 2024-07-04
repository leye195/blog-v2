"use client";

import { ComponentProps, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Action, KBarProvider, useRegisterActions } from "kbar";
import { useRouter } from "next/navigation";

import { getPosts } from "@/apis";
import KBarComponent from "@/components/KBarComponent";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import useMounted from "@/hooks/useMounted";
import { generateKBarAction } from "@/libs/kbarActions";
import StyledComponentsRegistry from "@/libs/registry";
import type { Post } from "@/types/notion";

const queryClient = new QueryClient();

const AppProvider = ({ children }: ComponentProps<"div">) => {
  const router = useRouter();
  const kbarActions = generateKBarAction(router);

  return (
    <KBarProvider actions={kbarActions}>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsRegistry>
          <HandleActionWithRoute />
          <KBarComponent />
          {children}
        </StyledComponentsRegistry>
      </QueryClientProvider>
    </KBarProvider>
  );
};

function HandleActionWithRoute() {
  const [actions, setActions] = useState<Action[]>([]);
  const isMounted = useMounted();
  const router = useRouter();

  useIsomorphicLayoutEffect(() => {
    if (isMounted) {
      (async () => {
        const posts = await getPosts("all");
        const postActions = posts.map(({ id, name, date }: Post) => ({
          id,
          name,
          subtitle: date,
          parent: "posts",
          perform: () => router.push(`/posts/${id}`),
        }));
        setActions([
          {
            id: "posts",
            name: "Posts",
            section: "Scope",
            keywords: "post, article",
            perform: () => router.push("/posts"),
          },
          ...postActions,
        ]);
      })();
    }
  }, [isMounted]);

  useRegisterActions(actions, [actions]);

  return <></>;
}

export default AppProvider;
