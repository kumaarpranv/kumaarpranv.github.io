import '@/styles/global.css';

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config'
import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '@/components/MDXComponents';

export default function App({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
