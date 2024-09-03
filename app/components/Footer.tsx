import Link from "next/link";

const Footer = ({
  topic,
  page,
  nextPage,
  prevPage,
}: {
  topic: string;
  page?: string;
  prevPage: string | null;
  nextPage: string | null;
}) => {
  if (!prevPage && !nextPage) {
    return;
  }

  const pageNums: number[] = [];
  if (prevPage && nextPage) {
    for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageNums.push(i);
    }
  }

  const nextPageArea = nextPage ? (
    <Link
      href={`/results/${topic}/${nextPage}`}
      className={!prevPage ? "mx-auto" : ""}
    >
      {!prevPage ? "more" : ""} &gt;&gt;&gt;
    </Link>
  ) : null;

  const prevPageArea = prevPage ? (
    <>
      <Link
        href={`/results/${topic}/${prevPage}`}
        className={!nextPage ? "mx-auto" : ""}
      >
        {!nextPage ? "more" : ""} &lt;&lt;&lt;
      </Link>
      {pageNums.map((num, index) => {
        return page && num === parseInt(page) ? (
          <span key={index}>{num}</span>
        ) : (
          <Link
            key={index}
            href={`/results/${topic}/${num}`}
            className="underline"
          >
            {num}
          </Link>
        );
      })}
    </>
  ) : null;

  return (
    <footer className="flex flex-row justify-between items-center px-2 py-4 font-bold w-60 mx-auto">
      {prevPageArea}
      {nextPageArea}
    </footer>
  );
};

export default Footer;
