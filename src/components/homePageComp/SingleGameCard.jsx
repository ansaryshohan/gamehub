import { Link } from "react-router-dom";

const SingleGameCard = ({game}) => {
  // console.log(game)
  return (
    <div className="bg-gray-600 shadow-lg rounded-lg flex flex-col items-center justify-center gap-3 overflow-hidden">
      <img src={game.image} alt={game.gameName} className="w-full h-64 md:w-full md:h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white text-center">{game.gameName}</h3>
        <p className="text-sm text-white text-center">Rating: {game.rating}</p>
        <Link to={`/reviews/${game._id}`}>
        <button
          type="button"
          className="px-3 py-1 font-normal rounded-3xl bg-gray-100 text-gray-800 mt-4 text-base "
        >
         Explore Details
        </button>
        </Link>
      </div>
    </div>
  )
}

export default SingleGameCard