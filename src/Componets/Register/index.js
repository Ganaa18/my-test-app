import React, { useState } from "react";
import { Row, Col, Button, Radio } from "antd";
import {} from "@ant-design/icons";
import FormInput from "../FormInput";
import css from "./style.module.css";
import FormSelection from "../FormSelection";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = (props) => {
  const [userFName, setUserFName] = useState("");
  const [userLName, setUserLName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAge, setUserAge] = useState(0);
  const [userBirthDate, setUserBirthDate] = useState(null);
  const [userGender, setUserGender] = useState("");
  const navigate = useNavigate();
  const addUser = () => {
    const user = {
      FirstName: userFName,
      LastName: userLName,
      Email: userEmail,
      Age: userAge,
      BirthDate: userBirthDate,
      Gender: userGender,
    };
    axios
      .post(
        "https://my-test-app-e26cd-default-rtdb.firebaseio.com/users.json",
        user
      )
      .then((res) => {
        navigate("/users");
      });
  };

  const inputValueChanged = (event, name) => {
    if (name === "FirstName") setUserFName(event.target.value);
    if (name === "LastName") setUserLName(event.target.value);
    if (name === "Email") setUserEmail(event.target.value);
    if (name === "Age") setUserAge(event.target.value);
    if (name === "BirthDate") setUserBirthDate(event.target.value);
    if (name === "Gender") setUserGender(event.target.value);
  };
  return (
    <div className={css.Form}>
      <FormInput
        fName={userFName}
        onChange={inputValueChanged}
        className={css.marginTop}
        labelName="FirstName"
        placeholder="firstname"
        type="text"
      />
      <FormInput
        onChange={inputValueChanged}
        labelName="LastName"
        placeholder="lastname"
        type="text"
      />
      <FormInput
        onChange={inputValueChanged}
        labelName="Email"
        placeholder="email"
        type="email"
      />
      <FormInput
        onChange={inputValueChanged}
        labelName="Age"
        placeholder="age"
        type="number"
      />
      <FormInput
        onChange={inputValueChanged}
        labelName="BirthDate"
        placeholder="birthdate"
        type="date"
      />
      <FormSelection onChange={inputValueChanged} />
      <Row style={{ marginTop: 30 }}>
        <Col span={24} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            onClick={addUser}
            type="primary"
            style={{
              background: "#001529",
              borderColor: "#001529",
              color: "#A6ADB4",
              flex: 1,
            }}
          >
            Add
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
