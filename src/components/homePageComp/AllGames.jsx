import SingleGameCard from "./SingleGameCard";

const AllGames = ({allGames}) => {

  return (
    <>
      <div className="max-w-6xl mx-auto pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {allGames?.map((game, index) => (
            <SingleGameCard key={index} game={game} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center pt-8">
        <button
          type="button"
          className="px-8 py-3 font-semibold rounded-full bg-gray-100 text-gray-800"
        >
          View All
        </button>
      </div>
    </>
  );
};

export default AllGames;
