import UpdateReviewForm from "./UpdateReviewForm";

const UpdateReviewModal = ({setMyReviews}) => {
  return (
    <dialog id="update-modal" className="modal">
      <div className="modal-box text-black">
        <div className="py-4 flex items-center justify-center">
          <h3 className="text-center text-xl font-bold text-purple-500">
            Update Game Review
          </h3>
        </div>
        <UpdateReviewForm setMyReviews={setMyReviews}/>
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop text-black">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default UpdateReviewModal;
