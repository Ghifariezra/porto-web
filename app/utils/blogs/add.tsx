interface BlogAdd {
  title: string;
  description: string;
  content: string;
  image: string | null;
  date: string;
}

export default async function BlogAdd(Post: BlogAdd) {
  const res = await fetch("/api/blogs/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Post),
  });

  return res;
}
