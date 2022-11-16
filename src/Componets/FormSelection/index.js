import { Row, Col, Button, Radio } from "antd";
const FormSelection = (props) => {
  return (
    <Row>
      <Col span={6}>
        <label style={{ fontWeight: "bold" }}>Gender</label>
      </Col>
      <Col span={18}>
        <Radio.Group
          onChange={(event) => {
            props.onChange(event, "Gender");
          }}
        >
          <Radio value={"Male"}>Male</Radio>
          <Radio value={"Female"}>Female</Radio>
        </Radio.Group>
      </Col>
    </Row>
  );
};

export default FormSelection;
