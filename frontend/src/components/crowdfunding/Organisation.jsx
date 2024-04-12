import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Organisation = (props) => {
  const [form, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      const res = await fetch("http://localhost:8000/api/auth/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success === false) {
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/joinorg");
    } catch (error) {
      console.error("Error:", error);
    }
  };
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
              <form onSubmit={handleSubmit}>
                <div className="hidden">
                  <label className="label p-2">
                    <span className="text-xl label-text">
                      Id
                    </span>
                  </label>
                  <input
                    type="number"
                    id="id"
                    placeholder="Enter ID"
                    className="w-full hidden input input-bordered h-15"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="label p-2">
                    <span className="text-xl label-text">
                      Amount
                    </span>
                  </label>
                  <input
                    type="number"
                    id="amount"
                    placeholder="Enter Donation Amount"
                    className="w-full input input-bordered h-15"
                    onChange={handleChange}
                  />
                </div>
                <div clsasName="flex">
                  <button
                    className="btn btn-block btn-sm mt-2 border disabled:opacity-80 border-slate-700"
                  >
                    Donate
                  </button>
                </div>
              </form>
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
