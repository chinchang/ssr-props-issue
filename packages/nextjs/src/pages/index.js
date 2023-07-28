import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      Hello world. I am homepage
      <p>
        Below is a dynamic <code>Link</code> thats redirects to a serverside
        rendered page
      </p>
      <p>
        Goto a{" "}
        <Link href="/play/3">
          <a>level page</a>
        </Link>
      </p>
      <p>
        Goto <a href="/blog">Blog</a>
      </p>
    </div>
  );
};
export default HomePage;
