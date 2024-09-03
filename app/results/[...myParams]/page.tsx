import Gallery from "@/app/components/Gallery";

export const generateMetadata = ({
  params,
}: {
  params: {
    myParams: (string | undefined)[];
  };
}) => {
  const topic = params.myParams?.[0] ?? "curated";
  const page = params.myParams?.[1] ?? "1";

  return {
    title: `Results for ${topic} - Page ${page} `,
  };
};

const SearchResultsPage = ({
  params,
}: {
  params: {
    myParams: (string | undefined)[];
  };
}) => {
  const topic = params.myParams?.[0] ?? "curated";
  const page = params.myParams?.[1] ?? "1";

  return <Gallery topic={topic} page={page} />;
};

export default SearchResultsPage;
