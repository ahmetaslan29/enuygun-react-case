import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { vote } from "../redux/actions";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import axios from 'axios'
const EmployeeCard = ({ employee, detail }) => {
  const dispatch = useDispatch();

  
  const updateVote = (id, empVote) => {
    dispatch(vote(id));

    axios({
      method: 'put',
      url: `https://65f9ea533909a9a65b19a44a.mockapi.io/enuygun/api/users/${id}`,
      data: {
        vote: empVote+1,
      }
    });
  };

  return (
    <div className="employee-card">
      {detail === "HomeDetail" ? (
        <Link to={`/`} className="back">
          <FaArrowAltCircleLeft />
        </Link>
      ) : (
        ""
      )}
      <Link to={`/${employee.id}`} className="link">
        <div className="box-head">
          <img src={employee.avatar} alt={employee.name} />
          <p className="name">
            {employee.name}
          </p>
        </div>
        <div className="description">
          <table class="table-auto">
            <tbody>
              <tr>
                <td> <strong>Job:</strong></td>
                <td className="info">{employee.job}</td>
              </tr>
              {detail === "HomeDetail" && (
                <>
                  <tr>
                    <td> <strong>Phone</strong></td>
                    <td className="info">{employee.phone}</td>
                  </tr>
                  <tr>
                    <td><strong>Email</strong></td>
                    <td className="info">{employee.email}</td>
                  </tr>
                  <tr>
                    <td><strong>Address</strong></td>
                    <td className="info">{employee.address}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
          {/* <p className="info">{employee.job}</p>
          {detail === "HomeDetail" ? <p className="info">{employee.phone}</p> : ""}
          {detail === "HomeDetail" ? <p className="info">{employee.email}</p> : ""}
          {detail === "HomeDetail" ? <p className="info">{employee.address}</p> : ""} */}
        </div>

        <p className="vote">{employee.vote}</p>
      </Link>
      {detail === "Home" ? <button onClick={() => updateVote(employee.id, employee.vote)}>Vote</button> : ""}
    </div>
  );
};

export default EmployeeCard;
