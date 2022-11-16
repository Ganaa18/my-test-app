import { Row, Col, Input } from "antd";
import css from "./style.module.css";
const FormInput = (props) => {
  return (
    <Row className={`${css.Row} ${props.className}`}>
      <Col span={6}>
        <label>
          <b>{props.labelName}</b>
        </label>
      </Col>
      <Col span={18}>
        <Input
          placeholder={props.placeholder}
          type={props.type}
          onChange={(event) => {
            props.onChange(event, props.labelName);
          }}
        />
      </Col>
    </Row>
  );
};

export default FormInput;
