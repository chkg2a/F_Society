const Organisation = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Organisation"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">BroCode!</h2>
        <p>Suspendisse lectus dictumst ullamcorper, et ut dolor pulvinar posuere efficitur.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Organisation;
