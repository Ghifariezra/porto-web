import BlogSlug from "@/app/components/blogs/blogSlug";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPage(Props: Props) {
  const { slug } = await Props.params;
  if (!slug) {
    notFound();
  }
  return <BlogSlug slug={slug} />;
}