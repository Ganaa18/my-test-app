import { Row, Col, Radio } from "antd";
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
          defaultValue={props.defaultValue}
        >
          <Radio value={"Male"}>Male</Radio>
          <Radio value={"Female"}>Female</Radio>
        </Radio.Group>
      </Col>
    </Row>
  );
};

export default FormSelection;
