import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export type onBlurType = React.FocusEventHandler<HTMLInputElement>;
export type onChangeType = React.ChangeEventHandler<HTMLInputElement>;

interface Props {
  label: string;
  type?: string;
  as?: "input" | "textarea";
  placeholder?: string;
  name: string;
  feedbackTxt?: string;
  required?: boolean;
  handleBlur?: onBlurType;
  handleFileChange?: onChangeType;
}

const FormInput = ({
  label,
  type = "",
  as = "input",
  placeholder = "",
  name,
  feedbackTxt,
  required,
  handleBlur,
  handleFileChange,
}: Props) => {
  return (
    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label className="mb-1">
          {label}{" "}
          {required ? <span className="text-danger fw-normal">*</span> : null}
        </Form.Label>

        <Form.Control
          className="mt-0"
          required={required}
          type={type}
          as={as}
          placeholder={placeholder}
          name={name}
          onChange={handleFileChange}
          onBlur={handleBlur}
        />

        {feedbackTxt ? (
          <Form.Control.Feedback>{feedbackTxt}</Form.Control.Feedback>
        ) : null}
      </Form.Group>
    </Row>
  );
};

export default FormInput;
