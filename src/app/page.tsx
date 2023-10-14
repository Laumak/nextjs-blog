import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <React.Fragment>
      <article className="mt-6 mb-10">
        <h2 className="text-2xl">
          <Link href="/blog/test">Quis duis qui nisi in cupidatat</Link>
        </h2>
        <small>
          10.10.2023 |{' '}
          <code className="bg-slate-400 rounded-md p-1">test 1</code>
          &nbsp;
          <code className="bg-slate-600 text-white rounded-md p-1">test 2</code>
          &nbsp;
          <code className="bg-slate-800 text-white rounded-md p-1">test 3</code>
        </small>
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
