import React from "react";
import ReviewStore from "../../store/ReviewStore";
import ValidationHelper from "../../utility/ValidationHelper";
import toast from "react-hot-toast";

function CreateReview() {
  const { ReviewFormData, ReviewFormOnChange, ReviewSaveRequest, ReviewListRequest } = ReviewStore();

  const submitReview = async () => {
    if (ValidationHelper.IsEmpty(ReviewFormData.des)) {
      toast.error("Review Required");
    } else {
      let res = await ReviewSaveRequest(ReviewFormData);
      await ReviewListRequest();
      res
        ? toast.success("New Review Created")
        : toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <div className="bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-md">
        <h3>
          <span className="text-yellow-500">Subscribe</span> to our review letter
        </h3>
        <div className="flex flex-col md:flex-row gap-1">
          <input
            onChange={(e)=> ReviewFormOnChange("des", e.target.value)}
            type="email"
            placeholder="what's on your mind about us?"
            className="w-full px-5 py-3 text-green-900 rounded-md outline-none bg-white"
          />
          <button
            onClick={submitReview}
            className="flex items-center justify-center gap-1 bg-green-950 px-5 py-2 rounded-md hover:opacity-80"
          >
            <span>Submit</span>
            <i className="ri-mail-send-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateReview;
