import { useRef } from "react";
import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: {
    padding: "40px 20px",
  },
  name: {
    fontSize: "25px",
    fontWeight: "600",
  },
  paragraph: {
    fontSize: "12px",
  },
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
    padding: "20px",
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  button: {
    height: "50px",
    width: "150px",
    backgroundColor: "#7b61ff",
    color: "#fff",
    margin: "10px 0",
    borderRadius: "10px",
  },
});

const ResumeGenerator = ({
  name,
  email,
  phone,
  experience,
  education,
  skills,
}) => {
  const resumeRef = useRef(null);

  const handleDownload = () => {
    const blob = new Blob([resumeRef.current.toBlob()], {
      type: "application/pdf",
    });
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 p-4 w-full h-5 bg-[#7b61ff] flex justify-center items-center">
        Generated Resume
      </h1>
      <PDFViewer className="h-[900px] w-3/4 rounded-xl">
        <Document>
          <Page size="A4" className="h-full w-11/12" ref={resumeRef}>
            <View style={styles.container}>
              <Text style={styles.name} className="font-extrabold">
                {name}
              </Text>
              <Text style={styles.paragraph}>Email: {email}</Text>
              <Text style={styles.paragraph}>Phone: {phone}</Text>
              <Text style={styles.paragraph}>Experience: {experience}</Text>
              <Text style={styles.paragraph}>Education: {education}</Text>
              <Text style={styles.paragraph}>Skills: {skills}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
      <button onClick={handleDownload} style={styles.button}>
        Download PDF
      </button>
    </div>
  );
};

ResumeGenerator.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
};
export default ResumeGenerator;
