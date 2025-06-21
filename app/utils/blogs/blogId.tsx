export default async function BlogID(id: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/blogs/${id}`);
  const data = await res.json();
  return data;
}
