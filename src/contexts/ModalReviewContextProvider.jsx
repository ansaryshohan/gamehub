import { useState } from "react";
import { ModalReviewContext } from "./ModalReviewContext";

const ModalReviewContextProvider = ({ children }) => {
  const [updatingReviewId, setUpdatingReviewId] = useState("");

  const modalReviewData = { updatingReviewId,setUpdatingReviewId };

  return (
    <ModalReviewContext.Provider value={modalReviewData}>
      {children}
    </ModalReviewContext.Provider>
  );
};

export default ModalReviewContextProvider;
