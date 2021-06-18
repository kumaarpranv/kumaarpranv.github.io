import { MDXRemote } from 'next-mdx-remote';

import { getFileBySlug } from '@/lib/mdx';
import ResourceLayout from '@/layouts/resourcelist';

export default function Resources({ mdxSource, frontMatter }) {
  return (
    <ResourceLayout frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} />
    </ResourceLayout>
  );
}

export async function getStaticProps() {
  const resourcelist = await getFileBySlug('resourcelist');

  return { props: resourcelist };
}
