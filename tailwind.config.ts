import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // https://tailwindcss.com/docs/content-configuration#safelisting-classes
  safelist: [
    // As these classes are used dynamically in the "Tag" component,
    // they're not present in the end-result before runtime. Due to this
    // the classes have to manually be "forced" to be in the css output.
    'bg-slate-400',
    'bg-slate-600',
    'bg-slate-800',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
