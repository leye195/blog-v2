import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const generateKBarAction = (router: AppRouterInstance) => {
  const actions = [
    {
      id: "home",
      name: "Home",
      section: "Scope",
      perform: () => router.push("/"),
    },
    {
      id: "posts",
      name: "Posts",
      section: "Scope",
      keywords: "post, article",
      perform: () => router.push("/posts"),
    },
    {
      id: "resume",
      name: "Resume",
      section: "Scope",
      perform: () => router.push("/resume"),
    },
    {
      id: "rss",
      name: "RSS",
      section: "Scope",
      perform: () => router.push("/rss.xml"),
    },
    {
      id: "github",
      name: "Github",
      subtitle: "leye195",
      section: "Social",
      perform: () =>
        window.open(
          "https://github.com/leye195",
          "_blank",
          "noopner,noreferrer"
        ),
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      subtitle: "Young Jae (Dan Lee) Lee",
      section: "Social",
      perform: () =>
        window.open(
          "https://www.linkedin.com/in/young%E2%80%86jae-lee-113451216/",
          "_blank",
          "noopner,noreferrer"
        ),
    },
  ];

  return actions;
};
