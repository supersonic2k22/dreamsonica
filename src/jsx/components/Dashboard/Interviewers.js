import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getInterviewersAction,
  loadingToggleAction,
} from "../../../store/actions/AuthActions";

const Interviewers = () => {
  const dispatch = useDispatch();
  const { interviewers } = useSelector((state) => state?.auth?.interviewers);

  useEffect(() => {
    if (!interviewers) {
      dispatch(loadingToggleAction(true));
      dispatch(getInterviewersAction());
    }
    // eslint-disable-next-line
  }, [interviewers]);
  return (
    <>
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Interviewers</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              {interviewers?.length > 0 ? (
                <table className="table table-responsive-sm">
                  <thead>
                    <tr>
                      <th>First name</th>
                      <th>Last name</th>
                      <th>Industry</th>
                    </tr>
                  </thead>
                  <tbody>
                    {interviewers?.map(
                      ({ firstName, lastName, industry }, index) => (
                        <tr key={index}>
                          <td>{firstName}</td>
                          <td>{lastName}</td>
                          <td>{industry}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              ) : (
                <div>No data found</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interviewers;
