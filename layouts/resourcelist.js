import Container from '@/components/Container';

export default function ResourceLayout({ children }) {
  return (
    <Container
      title="Resource List – Pranav Kumar"
      description="Here's a list of resources I find useful (or) interesting."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Resource List
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's a list of resources I found Useful (or) Interesting. 
        </p>
        <div className="prose dark:prose-dark w-full">{children}</div>
      </article>
    </Container>
  );
}
