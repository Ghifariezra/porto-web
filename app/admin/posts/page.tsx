// app/admin/page.tsx
import { fetchBlogItems } from "@/app/utils/blogs/blog";
import BlogAdminClient from "@/app/components/blogs/blogAdmin";

export default async function BlogAdmin() {
  const blogItems = await fetchBlogItems();

  return <BlogAdminClient blogItems={blogItems} />;
}
