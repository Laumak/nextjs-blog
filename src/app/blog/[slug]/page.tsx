import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Article',
  description: 'An article page of a certain blog.',
};

export default function BlogPage() {
  return (
    <article>
      <h2 className="text-2xl">Quis duis qui nisi in cupidatat</h2>

      <small>10.10.2023</small>

      <p className="mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
        blanditiis consequatur voluptatem. Qui magnam ratione dicta accusantium
        perferendis recusandae quo in itaque, nam eligendi repudiandae aut ea
        voluptatum, tempora magni.
      </p>

      <p className="mb-5">
        Ut enim ad voluptate eu magna excepteur eiusmod. Incididunt irure enim
        adipisicing exercitation in. Eu adipisicing enim in non nisi. Labore
        mollit deserunt consequat ut nulla enim velit.
      </p>

      <p className="mb-5">
        Excepteur dolor ullamco duis in in exercitation enim minim. Dolor sint
        ad quis Lorem amet est. Elit deserunt non aliqua id ullamco ad occaecat
        ullamco labore enim. Anim sunt ut id eu ut adipisicing dolore aute
        proident culpa sit aliquip consequat laboris.
      </p>

      <p className="mb-5">
        Quis ipsum consequat laborum consequat est magna id. Proident commodo
        aliqua sint eu tempor proident officia proident aliqua in commodo
        eiusmod qui quis. Eu anim eu ipsum anim duis esse. Velit amet deserunt
        laboris consequat excepteur amet pariatur irure. Sint sit Lorem
        consectetur labore dolor culpa. Laborum laborum elit enim nostrud duis
        ea. Id proident consectetur tempor eu qui sit commodo duis sunt.
      </p>

      <p className="mb-5">
        Quis ipsum consequat laborum consequat est magna id. Proident commodo
        aliqua sint eu tempor proident officia proident aliqua in commodo
        eiusmod qui quis. Eu anim eu ipsum anim duis esse. Velit amet deserunt
        laboris consequat excepteur amet pariatur irure. Sint sit Lorem
        consectetur labore dolor culpa. Laborum laborum elit enim nostrud duis
        ea. Id proident consectetur tempor eu qui sit commodo duis sunt.
      </p>

      <p className="mb-5">
        Quis ipsum consequat laborum consequat est magna id. Proident commodo
        aliqua sint eu tempor proident officia proident aliqua in commodo
        eiusmod qui quis. Eu anim eu ipsum anim duis esse. Velit amet deserunt
        laboris consequat excepteur amet pariatur irure. Sint sit Lorem
        consectetur labore dolor culpa. Laborum laborum elit enim nostrud duis
        ea. Id proident consectetur tempor eu qui sit commodo duis sunt.
      </p>

      <p>
        Quis ipsum consequat laborum consequat est magna id. Proident commodo
        aliqua sint eu tempor proident officia proident aliqua in commodo
        eiusmod qui quis. Eu anim eu ipsum anim duis esse. Velit amet deserunt
        laboris consequat excepteur amet pariatur irure. Sint sit Lorem
        consectetur labore dolor culpa. Laborum laborum elit enim nostrud duis
        ea. Id proident consectetur tempor eu qui sit commodo duis sunt.
      </p>
    </article>
  );
}
