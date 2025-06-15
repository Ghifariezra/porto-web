export interface BlogOverview {
  id: number;
  user_id: number;
  image?: string | null;
  date: string;
  title: string;
  description: string;
  updated_at?: string;
}

export const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const fetchBlogItems = async () => {
  try {
    const response = await fetch(
        `${process.env.BASE_URL}/api/blogs`,
        {
            method: "GET",
            // credentials: "include",
        }
    );
    const data = await response.json();
    const blogs = data.flatMap((item: { blogs: BlogOverview[] }) => item.blogs);
    return blogs;
  } catch (error) {
    console.error("Error fetching blog items:", error);
    return [];
  }
};
