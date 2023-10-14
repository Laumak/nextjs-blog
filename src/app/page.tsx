import React from 'react';
import Link from 'next/link';

interface TagProps {
  children: string;
  backgroundHue: 400 | 600 | 800;
}

const Tag = ({ children, backgroundHue }: TagProps) => {
  let classes = `bg-slate-${backgroundHue} rounded-md py-1 px-2 mr-1 inline-block`;

  // Make text color white if background goes "dark enough"
  // to not be accessible anymore.
  if (backgroundHue >= 600) {
    classes += ' text-white';
  }

  return (
    <li className={classes}>
      <Link href="/tags/wip">{children}</Link>
    </li>
  );
};

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

export default function Home() {
  return (
    <React.Fragment>
      <Article title="Quis duis qui nisi in cupidatat" link="/blog/test">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
        blanditiis consequatur voluptatem. Qui magnam ratione dicta accusantium
        perferendis recusandae quo in itaque, nam eligendi repudiandae aut ea
        voluptatum, tempora magni.
      </Article>

      <Article title="Quis duis qui nisi in cupidatat" link="/blog/test">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
        blanditiis consequatur voluptatem. Qui magnam ratione dicta accusantium
        perferendis recusandae quo in itaque, nam eligendi repudiandae aut ea
        voluptatum, tempora magni.
      </Article>

      <Article title="Quis duis qui nisi in cupidatat" link="/blog/test">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
        blanditiis consequatur voluptatem. Qui magnam ratione dicta accusantium
        perferendis recusandae quo in itaque, nam eligendi repudiandae aut ea
        voluptatum, tempora magni.
      </Article>

      <Article title="Quis duis qui nisi in cupidatat" link="/blog/test">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
        blanditiis consequatur voluptatem. Qui magnam ratione dicta accusantium
        perferendis recusandae quo in itaque, nam eligendi repudiandae aut ea
        voluptatum, tempora magni.
      </Article>
    </React.Fragment>
  );
}
