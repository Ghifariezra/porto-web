// import { NewPostPage, EditPostPage } from "@/app/components/formPost/form";
import EditPostPage from "@/app/components/formPost/editPost";
import NewPostPage from "@/app/components/formPost/newPost";

export default async function PostsForm({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const resolvedSearchParams = await searchParams;
  const id = resolvedSearchParams?.id;

  return id ? <EditPostPage id={id} /> : <NewPostPage />;
}
