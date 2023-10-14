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

export default function Home() {
  return (
    <React.Fragment>
      <article className="mt-6 mb-10">
        <h2 className="text-2xl">
          <Link href="/blog/test">Quis duis qui nisi in cupidatat</Link>
        </h2>
        <div className="my-2 text-slate-600">Published on 10.10.2023</div>
        <ul aria-label="Tags" className="my-2">
          <Tag backgroundHue={400}>Test 1</Tag>
          <Tag backgroundHue={600}>Test 2</Tag>
          <Tag backgroundHue={800}>Test 3</Tag>
        </ul>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          blanditiis consequatur voluptatem. Qui magnam ratione dicta
          accusantium perferendis recusandae quo in itaque, nam eligendi
          repudiandae aut ea voluptatum, tempora magni.
        </p>
      </article>

      <article className="mb-10">
        <h2 className="text-2xl">
          <Link href="/blog/test">Quis duis qui nisi in cupidatat</Link>
        </h2>
        <small>10.10.2023</small>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          blanditiis consequatur voluptatem. Qui magnam ratione dicta
          accusantium perferendis recusandae quo in itaque, nam eligendi
          repudiandae aut ea voluptatum, tempora magni.
        </p>
      </article>

      <article className="mb-10">
        <h2 className="text-2xl">
          <Link href="/blog/test">Quis duis qui nisi in cupidatat</Link>
        </h2>
        <small>10.10.2023</small>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          blanditiis consequatur voluptatem. Qui magnam ratione dicta
          accusantium perferendis recusandae quo in itaque, nam eligendi
          repudiandae aut ea voluptatum, tempora magni.
        </p>
      </article>

      <article className="mb-10">
        <h2 className="text-2xl">
          <Link href="/blog/test">Quis duis qui nisi in cupidatat</Link>
        </h2>
        <small>10.10.2023</small>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          blanditiis consequatur voluptatem. Qui magnam ratione dicta
          accusantium perferendis recusandae quo in itaque, nam eligendi
          repudiandae aut ea voluptatum, tempora magni.
        </p>
      </article>

      <article className="mb-10">
        <h2 className="text-2xl">
          <Link href="/blog/test">Quis duis qui nisi in cupidatat</Link>
        </h2>
        <small>10.10.2023</small>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          blanditiis consequatur voluptatem. Qui magnam ratione dicta
          accusantium perferendis recusandae quo in itaque, nam eligendi
          repudiandae aut ea voluptatum, tempora magni.
        </p>
      </article>
    </React.Fragment>
  );
}
