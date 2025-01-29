import { useContext } from "react";
import { ModalReviewContext } from "../contexts/ModalReviewContext";

const useModalReviewContext = () => useContext(ModalReviewContext);

export default useModalReviewContext;
