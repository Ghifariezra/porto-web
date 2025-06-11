"use client";
import { useSearchParams } from "next/navigation";
import { NewPostPage, EditPostPage } from "@/app/components/formPost/form";
const PostsForm = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  if (id) {
    return <EditPostPage id={id} />;
  } else {
    return <NewPostPage />;
  }
};

export default PostsForm;
