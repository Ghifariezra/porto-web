export default async function BlogUploads(file: File | null) {
  const formData = new FormData();
  if (file) {
    formData.append("file", file);
  }

  const res = await fetch(`${process.env.BASE_URL}/api/blogs/upload`, {
    method: "POST",
    body: formData,
  });

  return res;
}
