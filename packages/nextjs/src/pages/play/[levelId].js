import Link from "next/link";

const LevelPage = ({ levelIdParam }) => {
  return (
    <div>
      <p> I am serverside rendered play page.</p>
      <p>I get my level ID from serverside prop.</p>
      <p>Level {levelIdParam}</p>

      <Link href="/">
        <a>Goto home</a>
      </Link>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  let { levelId } = ctx.params;
  if (levelId.match(/levelId/)) {
    levelId = ctx.resolvedUrl.match(/play\/([^/]*)/)[1];
  }

  return {
    props: {
      levelIdParam: levelId,
    },
  };
}

export default LevelPage;
