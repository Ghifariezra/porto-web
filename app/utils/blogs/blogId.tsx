export default async function BlogSlug(id: string) {
  const res = await fetch(`/api/blogs/${id}`);
  const data = await res.json();
  return data;
}
