import InputField from "../login&register/InputField";

const GameReviewForm = ({handleFormSubmit,handleFormDataOnChange,reviewInputError}) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <InputField label={"Enter a Rating (0-10):"} error={reviewInputError.ratingInputError}>
        <input
          onChange={handleFormDataOnChange}
          type="number"
          name="ratingInput"
          id="ratingInput"
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
          placeholder="0-10"
          required
          min={0}
          max={10}
        />
      </InputField>
      <InputField label={"Your Comment"}>
        <textarea
        onChange={handleFormDataOnChange}
          type="text"
          name="reviewDetails"
          id="reviewDetails"
          required
          placeholder="Game review details"
          className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600 resize-none"
        />
      </InputField>
      <div className="w-full grid place-items-center mt-5">
        <button
          className="block w-1/3 p-3 text-center text-gray-50 bg-violet-600 rounded-2xl"
          type="submit"
        >
          Add Review
        </button>
      </div>
    </form>
  );
};

export default GameReviewForm;
