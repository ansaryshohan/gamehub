import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import bgImg from "../assets/sub-banner-img.jpg";
import UpdateReviewModal from "../components/modals/UpdateReviewModal";
import ReviewTableRow from "../components/myReviewComp/ReviewTableRow";
import SectionHeadline from "../components/shared/SectionHeadline";
import Title from "../components/shared/Title";
import { useAuthContext } from "../hooks/useAuthContext";
import useModalReviewContext from "../hooks/useModalReviewContext";

const MyReviewsPage = () => {
  const { user } = useAuthContext();
  const [myReviews, setMyReviews] = useState([]);
  const { updatingReviewId, setUpdatingReviewId } = useModalReviewContext();

  useEffect(() => {
    fetch("http://localhost:3000/my-reviews", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ userEmail: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => setMyReviews(data))
      .catch((err) => toast.error(err));
  }, [user]);

  const handleReviewDelete = (reviewId) => {
    // sweet alert: first get the confirmation of delete
    Swal.fire({
      title: "Are you sure ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        const deleteResponse = await fetch(
          `http://localhost:3000/review/${reviewId}`,
          {
            method: "DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ userEmail: user.email }),
          }
        );
        const { deletedData, gameReviewDataAfterDelete } =
          await deleteResponse.json();
        // console.log(deletedData,gameReviewData);
        if (deletedData.deletedCount > 0) {
          setMyReviews(gameReviewDataAfterDelete);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          text: "Review delete cancelled :)",
          icon: "error",
        });
      }
    });
  };

  const handleUpdateModalData = async (reviewId) => {
    flushSync(setUpdatingReviewId(reviewId));
    if (updatingReviewId) {
      document.getElementById("update-modal").showModal();
    }
  };

  return (
    <div className="bg-gray-950 text-white">
      <Title title={"HomePage | GameHub"} />
      <UpdateReviewModal setMyReviews={setMyReviews} />
      <div
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "none",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="min-h-72 flex items-center justify-center"
      >
        <SectionHeadline titleText={`My Reviews`} />
      </div>
      <div className="w-full md:w-11/12 mx-auto">
        <div className="overflow-x-auto py-10">
          <table className="table text-white mb-10">
            {/* head */}
            <thead className="text-slate-400/60 text-lg">
              <tr>
                <th>SI</th>
                <th>Game Info</th>
                <th>Rating</th>
                <th>Review</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myReviews?.map((singleReview, index) => (
                <ReviewTableRow
                  key={singleReview._id}
                  indexNo={index}
                  rowData={singleReview}
                  handleReviewDelete={handleReviewDelete}
                  handleUpdateModalData={handleUpdateModalData}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviewsPage;
