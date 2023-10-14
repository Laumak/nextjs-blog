import React from 'react';
import Link from 'next/link';

import Tag from './Tag';

interface ArticleProps {
  children: string;
  title: string;
  link: string;
}

const Article = ({ children, title, link }: ArticleProps) => {
  return (
    <article className="mt-6 mb-10">
      <h2 className="text-2xl">
        <Link href={link}>{title}</Link>
      </h2>
      <div className="my-2 text-slate-600">Published on 10.10.2023</div>
      <ul aria-label="Tags" className="my-2">
        <Tag backgroundHue={400}>Test 1</Tag>
        <Tag backgroundHue={600}>Test 2</Tag>
        <Tag backgroundHue={800}>Test 3</Tag>
      </ul>
      <p>{children}</p>
    </article>
  );
};

export default Article;
