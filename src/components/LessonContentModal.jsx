import content_data from "../data/content.js";

const LessonContentModal = (props) => {
  return (
    <div>
      <div className="flex justify-end">
        <label
          htmlFor={`my-modal-${props.id}`}
          className="underline italic text-primary"
          style={{ cursor: "pointer" }}
        >
          Details
        </label>
      </div>
      <input
        type="checkbox"
        id={`my-modal-${props.id}`}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          Class No: {props.id} <br />
          <div className="flex">
            <div className="indicator">
              <div className="grid m-2 p-2 text-center w-32 h-32 bg-base-300 place-items-center font-bold">
                {content_data[props.id - 1].content}
              </div>
            </div>
            <div className="indicator">
              <div className="grid m-2 p-2 text-center w-32 h-32 bg-base-300 place-items-center font-bold">
                {content_data[props.id - 1].recording}
              </div>
            </div>
          </div>
          <div className="modal-action flex justify-end">
            <label htmlFor={`my-modal-${props.id}`} className="cursor-pointer">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonContentModal;
