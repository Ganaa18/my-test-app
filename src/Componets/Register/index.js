import React from "react";
import { Row, Col, Button, Radio } from "antd";
import {} from "@ant-design/icons";
import FormInput from "../FormInput";
import css from "./style.module.css";
import FormSelection from "../FormSelection";
const Register = (props) => {
  const onClick = () => {
    alert("clicked");
  };
  return (
    <div className={css.Form}>
      <FormInput
        className={css.marginTop}
        labelName="FirstName"
        placeholder="firstname"
        type="text"
      />
      <FormInput labelName="LastName" placeholder="lastname" type="text" />
      <FormInput labelName="Email" placeholder="email" type="email" />
      <FormInput labelName="Age" placeholder="age" type="number" />
      <FormSelection />
      <Row style={{ marginTop: 30 }}>
        <Col span={24} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            type="primary"
            style={{
              background: "#25D56F",
              borderColor: "#25D56F",
              color: "black",
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
