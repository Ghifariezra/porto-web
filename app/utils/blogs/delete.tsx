export default async function BlogDelete(id: number) {
  try {
    await fetch(`/api/blogs/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.reload();
  } catch (error) {
    console.error("Failed to delete blog:", error);
  }
}
