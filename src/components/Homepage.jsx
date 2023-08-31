import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="home container-fluid h-75 w-25 p-5">
      <p className="h1">Bible Trivia Game</p>
      <div className="btn-container p-5">
        <p className="p-5">Choose Difficulty:</p>
        <Link to="/easy">
          <button className="btn btn-primary mt-5 p-2 w-100">Easy</button>
        </Link>
        <Link to="/medium">
          <button className="btn btn-primary mt-5 p-2 w-100">Medium</button>
        </Link>
        <Link to="/hard">
          <button className="btn btn-primary mt-5 p-2 w-100">Hard</button>
        </Link>
      </div>
      <Link to="/votd">
        <button className="votd btn btn-link mt-4 p-2">Verse of the Day</button>
      </Link>
    </div>
  );
};

export default Homepage;
