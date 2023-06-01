import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: "20px",
  },
  column: {
    flex: 1,
    marginRight: "10px",
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
});

const ResumeGenerator = ({ phase1Data, phase2Data }) => {
  const { name, yearOfStudy, college, branch, cgpa } = phase1Data;
  const {
    addressLine1,
    addressLine2,
    mobileNumber,
    emailID,
    portfolioWebsite,
  } = phase2Data;

  return (
    <div className={styles.container}>
      <div>
        <h1 className="m-auto text-xs">Generated Resume</h1>
        <PDFViewer
          width="1000"
          height="800"
          className="flex justify-center items-center"
        >
          <Document>
            <Page size="A4" style={styles.page}>
              <View style={styles.column}>
                <Text style={styles.heading}>Phase 1 Data</Text>
                <Text>Name: {name}</Text>
                <Text>Year of Study: {yearOfStudy}</Text>
                <Text>College: {college}</Text>
                <Text>Branch: {branch}</Text>
                <Text>CGPA till Recent Semester: {cgpa}</Text>
              </View>
              <View style={styles.column}>
                <Text style={styles.heading}>Phase 2 Data</Text>
                <Text>Address Line 1: {addressLine1}</Text>
                <Text>Address Line 2: {addressLine2}</Text>
                <Text>Mobile Number: {mobileNumber}</Text>
                <Text>Email ID: {emailID}</Text>
                <Text>Portfolio Website Link: {portfolioWebsite}</Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </div>
  );
};

ResumeGenerator.propTypes = {
  phase1Data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    yearOfStudy: PropTypes.string.isRequired,
    college: PropTypes.string.isRequired,
    branch: PropTypes.string.isRequired,
    cgpa: PropTypes.string.isRequired,
  }).isRequired,
  phase2Data: PropTypes.shape({
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired,
    mobileNumber: PropTypes.string.isRequired,
    emailID: PropTypes.string.isRequired,
    portfolioWebsite: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResumeGenerator;
