const Organisation = (props) => {
  console.log(props);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={props.image ? props.image : "/who.png"}
          alt="Organisation"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Donate
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Organisation;
