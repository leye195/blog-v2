import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dan DevLog",
    short_name: "Dan DevLog",
    description: "Blog posted about development",
    start_url: "/",
    background_color: "#fff",
  };
}
