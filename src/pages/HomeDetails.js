import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { EmployeeCard } from "../components";
import { FaSpinner } from "react-icons/fa";

const HomeDetails = ({ employee }) => {
  const { id } = useParams();
  if (!employee || employee.length === 0) { return ( 
    <div className="wrapper">
      <div className="wrapper__list">
        <FaSpinner />
      </div>
    </div>
  )}
  const emp = employee.filter((emp) => emp.id === id)[0];
  return (
    <section>
      <div className="wrapper">
        <div className="wrapper__list">
          <EmployeeCard key={emp.id} employee={emp} detail="HomeDetail" />
        </div>
      </div>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    employee: state.employee,
    vote: state.vote,
  };
};
export default connect(mapStateToProps)(HomeDetails);
