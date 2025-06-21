import BlogSlug from "@/app/components/blogs/blogSlug";
import BlogID from "@/app/utils/blogs/blogId";
import { notFound } from "next/navigation";

type Props = {
  searchParams?: Promise<{ id: string }>;
};

export default async function BlogPage(props: Props) {
  const params = await props.searchParams;
  const { id } = params || {};
  
  if (!id) {
    notFound();
  }
  const blog = await BlogID(id);
  if (!blog) {
    notFound();
  }
  return <BlogSlug blog={[blog]} />;
}
