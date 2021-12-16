import { useState } from "react";

function JobApp() {
  // const [candName, setCandName] = useState("");
  // const [candEmail, setCandEmail] = useState("");
  // const [candAge, setCandAge] = useState("");
  // const [roleApplied, setRoleApplied] = useState("");
  // const [termsCond, setTermsCond] = useState(false);
  const [state, setState] = useState({
    candName: "",
    candEmail: "",
    candAge: "",
    roleApplied: "",
    termsCond: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(candName, candEmail, candAge, roleApplied, termsCond);
    console.log(state);
  };

  return (
    <>
      <h2>Job Application</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {/*Candidate Name*/}
          <label>Candidate Name: </label>
          <input
            type="text"
            name="candName"
            placeholder="Enter candidate's name"
            //value={candName}
            value={state.candName}
            onChange={({ target: { value } }) =>
              setState({ ...state, candName: value })
            }
            required
          />
        </div>

        <br />
        <div>
          {/*Candidate E-mail*/}
          <label>Candidate E-mail: </label>
          <input
            type="email"
            name="candEmail"
            placeholder="Enter candidate's e-mail"
            //value={candEmail}
            value={state.candEmail}
            onChange={({ target: { value } }) =>
              setState({ ...state, candEmail: value })
            }
            required
          />
        </div>

        <br />
        <div>
          {" "}
          {/*Candidate Age*/}
          <label>Candidate Age: </label>
          <input
            type="number"
            name="candAge"
            placeholder="Enter candidate's age"
            //value={candAge}
            value={state.candAge}
            onChange={({ target: { value } }) =>
              setState({ ...state, candAge: value })
            }
            required
          />
        </div>

        <br />
        <div>
          {" "}
          {/*Role Applied*/}
          <label>Role Applied: </label>
          <select
            //value={roleApplied}
            value={state.roleApplied}
            name="roleApplied"
            onChange={({ target: { value } }) =>
              setState({ ...state, roleApplied: value })
            }
            required
          >
            <option value="">---Select a Role---</option>
            <option value="react">React developer</option>
            <option value="node">Node developer</option>
            <option value="mern">MERN developer</option>
          </select>
        </div>

        <br />
        <div>
          {" "}
          {/*Terms and Conditions*/}
          <input
            type="checkbox"
            name="termsCond"
            //checked={termsCond}
            checked={state.termsCond}
            onChange={({ target: { checked } }) =>
              setState({ ...state, termsCond: checked })
            }
            required
          />
          <label>I agree to Terms & Conditions.</label>
        </div>

        <br />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default JobApp;
