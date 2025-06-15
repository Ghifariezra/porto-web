interface FormEditSlug {
  title: string;
  description: string;
  content: string;
  image: string | null;
  date: string;
}

export default async function BlogEditSlug(id: number, newPost: FormEditSlug) {
  const res = await fetch(`/api/blogs/edit/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  return res;
}
