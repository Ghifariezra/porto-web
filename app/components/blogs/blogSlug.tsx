import Markdown from "react-markdown";

type Blog = {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  image: string;
  updated_at: string;
};

export default function BlogSlug({ blog }: { blog: Blog[] }) {
  return (
    <div className="max-w-3xl mx-auto grid grid-cols-1 gap-8 px-4 py-8 bg-zinc-50 dark:bg-zinc-800 min-h-screen">
      {blog.map((item, index) => (
        <div key={index} className="flex flex-col gap-4">
          <div
            className="aspect-video bg-cover bg-center rounded-2xl overflow-hidden w-full"
            style={{
              backgroundImage: item.image ? `url(${encodeURI(item.image)})` : "none",
            }}
          ></div>
          <div className="flex flex-col gap-4">
            <span className="text-2xl sm:text-3xl font-bold break-words">
              <Markdown>{`# ${item.title}`}</Markdown>
            </span>
          </div>
          <span className="text-base sm:text-2xl text-zinc-700 dark:text-zinc-300 break-words">
            {item.content ? <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: item.content }} /> : <Markdown>{item.description}</Markdown>}
          </span>
        </div>
      ))}
    </div>
  );
}
