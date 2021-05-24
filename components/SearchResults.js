function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-5 md:pl-10 lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div></div>
          <p>{result.snippit}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
