import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero min-h-screen pt-16 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="font-simpsons text-5xl font-bold">Hello there 👋</h1>
          <p className="py-6">
            Join the conversation, meet new people, and make connections in one
            shared room.
          </p>
          <Link to="/login" className="btn">
            Let's get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
