// file: app/blog/page.tsx
import { fetchBlogItems } from "@/app/utils/blogs/blog";
import BlogUser from "@/app/components/blogs/blog";

export default async function BlogUserPage() {
  const blogItems = await fetchBlogItems();
  return <BlogUser blogItems={blogItems} />;
}
