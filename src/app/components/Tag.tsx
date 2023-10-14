import Link from 'next/link';

interface TagProps {
  children: string;
  backgroundHue: 400 | 600 | 800;
}

const Tag = ({ children, backgroundHue }: TagProps) => {
  let classes = `bg-slate-${backgroundHue} rounded-md py-1 px-2 mr-1 inline-block text-sm`;

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

export default Tag;
