import { useState } from "react";
import PropTypes from "prop-types";

const ResumeForm = ({ generateResume }) => {
  const [name, setName] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [college, setCollege] = useState("");
  const [branch, setBranch] = useState("");
  const [cgpa, setCGPA] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [emailID, setEmailID] = useState("");
  const [portfolioWebsite, setPortfolioWebsite] = useState("");
  const [phase, setPhase] = useState(1);

  const handleNext = () => {
    setPhase(2);
  };
  const handleBack = () => {
    setPhase(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof generateResume === "function") {
      generateResume({
        name,
        yearOfStudy,
        college,
        branch,
        cgpa,
        addressLine1,
        addressLine2,
        mobileNumber,
        emailID,
        portfolioWebsite,
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="w-full bg-[#7b61ff] h-[40px] flex justify-center items-center font-extrabold text-xl mb-4">
        Resume Generator
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-96 p-6 bg-white rounded shadow
"
      >
        {phase === 1 && (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="yearOfStudy" className="block mb-2 font-medium">
                Year of Study:
              </label>
              <input
                type="text"
                id="yearOfStudy"
                value={yearOfStudy}
                onChange={(e) => setYearOfStudy(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="college" className="block mb-2 font-medium">
                College:
              </label>
              <input
                type="text"
                id="college"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="branch" className="block mb-2 font-medium">
                Branch:
              </label>
              <input
                type="text"
                id="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="cgpa" className="block mb-2 font-medium">
                CGPA till Recent Semester:
              </label>
              <input
                type="text"
                id="cgpa"
                value={cgpa}
                onChange={(e) => setCGPA(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full py-2 mt-4 font-medium text-white bg-blue-500 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next
            </button>
          </>
        )}

        {phase === 2 && (
          <>
            <div className="mb-4">
              <label htmlFor="addressLine1" className="block mb-2 font-medium">
                Address Line 1:
              </label>
              <input
                type="text"
                id="addressLine1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="addressLine2" className="block mb-2 font-medium">
                Address Line 2:
              </label>
              <input
                type="text"
                id="addressLine2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mobileNumber" className="block mb-2 font-medium">
                Mobile Number:
              </label>
              <input
                type="text"
                id="mobileNumber"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="emailID" className="block mb-2 font-medium">
                Email ID:
              </label>
              <input
                type="email"
                id="emailID"
                value={emailID}
                onChange={(e) => setEmailID(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="portfolioWebsite"
                className="block mb-2 font-medium"
              >
                Portfolio Website Link:
              </label>
              <input
                type="text"
                id="portfolioWebsite"
                value={portfolioWebsite}
                onChange={(e) => setPortfolioWebsite(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="button"
              onClick={handleBack}
              className="w-full py-2 mt-4 font-medium text-white bg-blue-500 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Back
            </button>

            <button
              onClick={handleSubmit}
              type="submit"
              className="w-full py-2 mt-4 font-medium text-white bg-blue-500 rounded shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Generate Resume
            </button>
          </>
        )}
      </form>
    </div>
  );
};

ResumeForm.propTypes = {
  generateResume: PropTypes.func.isRequired,
};

export default ResumeForm;
