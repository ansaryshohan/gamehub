import { FaEye, FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Ratings from "../shared/Ratings";

const ReviewTableRow = ({
  rowData,
  indexNo,
  handleReviewDelete,
  handleUpdateModalData,
}) => {
  const { _id, gameName, genre, image, rating, review } = rowData;

  return (
    <>
      <tr className="hover:bg-slate-300/30 hover:text-gray-900">
        <th>{indexNo + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{gameName}</div>
              <div className="text-sm opacity-50">{genre}</div>
            </div>
          </div>
        </td>
        <td>
          <Ratings starCount={rating} starSize={10} />
        </td>
        <td>{review}</td>
        <th className="flex gap-1">
          <>
            <Link to={`/reviews/${_id}`}>
              <button
                id="view"
                className="btn btn-info h-auto min-h-3 px-1 py-2"
              >
                <FaEye size={12} />
              </button>
              <Tooltip anchorSelect="#view" clickable>
                <button>view review</button>
              </Tooltip>
            </Link>
          </>
          <>
            <button
              id="update"
              className="btn btn-success  h-auto min-h-3 px-1 py-2"
              onClick={() => handleUpdateModalData(_id)}
            >
              <FaPen size={12} />
            </button>
            <Tooltip anchorSelect="#update" clickable place="top-start">
              <button>update review</button>
            </Tooltip>
          </>
          <>
            <button
              id="delete"
              className="btn btn-error  h-auto min-h-3 px-1 py-2"
              onClick={() => handleReviewDelete(_id)}
            >
              <MdDeleteForever size={14} />
            </button>
            <Tooltip anchorSelect="#delete" clickable place="top-start">
              <button>delete review</button>
            </Tooltip>
          </>
        </th>
      </tr>
    </>
  );
};

export default ReviewTableRow;
