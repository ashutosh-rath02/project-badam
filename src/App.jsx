import { useState } from "react";
import ResumeForm from "./ResumeForm";
import ResumeGenerator from "./ResumeGenerator";

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  const generateResume = (data) => {
    setResumeData(data);
  };

  return (
    <div>
      {!resumeData ? (
        <ResumeForm generateResume={generateResume} />
      ) : (
        <ResumeGenerator {...resumeData} />
      )}
    </div>
  );
};

export default App;
