import Link from 'next/link';

const About = () => {
  // to test the error:
  // throw new Error("This is a test error");
  return (
    <>
      <h3>This is the About Page</h3>
      <p>I will appear through the children props inside the About Layout</p>
      <Link href="/">Link to HomePage</Link>
    </>
  );
};

export default About;
