import styles from './styles.module.css';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About NavBar Layout. Only present on the About Page.</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}

// copied over from layout.tsx
// https://beta.nextjs.org/docs/api-reference/file-conventions/head
// - the head.js special file will be deprecated in 13.2 and removed in future versions
// - soon, you will import the Metadata from 'next' and within the same file.

/*
Before: using head.js API
app/head.tsx
export default function Head() {
  return (
    <>
      <title>My Title</title>
    </>
  );
}

After: using Metadata API
app/layout.tsx|page.tsx
export const metadata = {
  title: 'My Title',
}

export default function Layout() {}

*/
