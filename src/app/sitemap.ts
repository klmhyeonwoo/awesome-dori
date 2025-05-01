import { MetadataRoute } from "next";
import { SERVICE_CATEGORY } from "@/utils/const";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nklcb.kr";

  const companyUrls = Object.keys(SERVICE_CATEGORY).map((company) => ({
    url: `${baseUrl}/?company=${company}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...companyUrls,
  ];
}
