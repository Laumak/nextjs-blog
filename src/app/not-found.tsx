import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2 className="text-2xl">Page not found!</h2>
      <br />
      <p>Sadly we couldn&apos;t find the page you were looking for :(</p>
      <br />
      <p>
        You may return back to the front page through here:{' '}
        <Link href="/" className="underline">
          Go to the front page
        </Link>
        .
      </p>
    </div>
  );
}
