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
    </>
  );
};

export default AllGames;
