interface BlogOverview {
  date: string;
  title: string;
  description: string;
}

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const blogItems: BlogOverview[] = [
  {
    date: `### ${formatDate("2024-04-16")}`,
    title: "# High Efficiency: Run multiple Selenium tasks simultaneously with Asyncio for Web Scraping",
    description:
      "Asynchrony is used to run concurrent tasks more efficiently, especially in the context of input/output (I/O) operations. Coroutine-based programming, which is one of the asynchronous approaches, is perfect for handling I/O tasks such as connections to databases.",
  },
  {
    date: `### ${formatDate("2024-03-29")}`,
    title: "# Computing Parallelism: Extracting Multiple PDFs",
    description: "Parallel computing is a type of computing where many calculations or processes are performed simultaneously. Large problems can often be broken down into smaller problems, which can then be solved at the same time.",
  },
  {
    date: `### ${formatDate("2024-04-30")}`,
    title: "# Python Library Operators: Writing More Efficient Code",
    description:
      "The operator module exports a set of efficient functions corresponding to the intrinsic operators of Python. For example, operator.add(x, y) is equivalent to the expression x+y. Many function names are those used for special methods, without the double underscores. For backward compatibility, many of these have a variant with the double underscores kept. The variants without the double underscores are preferred for clarity.",
  },
];
