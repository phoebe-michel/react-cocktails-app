import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const NoResultsFoundPage = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-96">
      <i className="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <p className="text-xl mb-5">No Results were Found</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Go Back
      </Link>
    </section>
  );
};

export default NoResultsFoundPage;
