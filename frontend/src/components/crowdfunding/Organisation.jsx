const Organisation = (props) => {
  console.log(props)
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={props.img}
          alt="Organisation"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Organisation;
