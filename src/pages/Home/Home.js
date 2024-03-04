import React, { useState, useEffect } from "react";
import {
  Input,
  Form,
  Row,
  Col,
  DatePicker,
  InputNumber,
  Checkbox,
  Radio,
  Button,
  Drawer,
  Space,
  Switch,
  Select,
  Upload,
  Slider,
  ColorPicker,
} from "antd";
import { EditOutlined, MinusCircleOutlined } from "@ant-design/icons";
import classes from "./Home.module.css";
import { v4 as uuidv4 } from "uuid";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Dragger from "antd/es/upload/Dragger";
import uploadImage from "../../Assets/Group 67 (1).svg"
const { Item: FormItem } = Form;
const { Group: RadioGroup } = Radio;
const { TextArea } = Input;

const DraggableInput = ({ id, label, type, options, onClick }) => (
  <Col
    className={classes.draggableInput}
    lg={11}
    // style={{ marginBottom: "8px", cursor: "grab" }}
    draggable
    onDragStart={(e) => {
      e.dataTransfer.setData(
        "text/plain",
        JSON.stringify({ id, label, type, options })
      );
    }}
  >
    <Space>
      {label} ({type})
    </Space>
  </Col>
);

const DroppedInput = ({ id, label, type, options, required }) => {
  let inputComponent;

  switch (type) {
    case "text":
      inputComponent = (
        <Form.Item
          label={label}
          name={id}
          rules={[{ required, message: `${label} is required` }]}
        >
          <Input placeholder={label} />
        </Form.Item>
      );
      break;
    case "number":
      inputComponent = (
        <Form.Item
          label={label}
          name={id}
          rules={[{ required, message: `${label} is required` }]}
        >
          <InputNumber placeholder={label} style={{ width: "100%" }} />
        </Form.Item>
      );
      break;
    case "date":
      inputComponent = (
        <Form.Item
          label={label}
          name={id}
          rules={[{ required, message: `${label} is required` }]}
        >
          <DatePicker placeholder={label} style={{ width: "100%" }} />
        </Form.Item>
      );
      break;
    case "checkbox":
      inputComponent = (
        <Form.Item
          label={label}
          name={id}
          rules={[{ required, message: `${label} is required` }]}
          valuePropName="checked"
          initialValue={options && options.includes(label)}
        >
          <Checkbox.Group options={options} />
        </Form.Item>
      );
      break;
    case "radio":
      inputComponent = (
        <Form.Item
          label={label}
          name={id}
          rules={[{ required, message: `${label} is required` }]}
          valuePropName="checked"
          initialValue={options && options.includes(label)}
        >
          <RadioGroup options={options} />
        </Form.Item>
      );
      break;
    case "select":
      inputComponent = (
        <Form.Item
          label={label}
          rules={[{ required, message: `${label} is required` }]}
          name={id}
          initialValue={options && options[0]}
        >
          <Select>
            {options &&
              options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
      );
      break;
    case "password":
      inputComponent = (
        <Form.Item
          label={label}
          rules={[{ required, message: `${label} is required` }]}
          name={id}
        >
          <Input
            placeholder={label}
            style={{ width: "100%" }}
            type="password"
          />
        </Form.Item>
      );
      break;
    case "email":
      inputComponent = (
        <Form.Item
          label={label}
          rules={[
            {
              required,
              message: `${label} is required`,
            },
            {
              pattern: new RegExp(/^[\w-\.]+@([\w-]+\.)+[a-zA-Z]{2,4}$/),
              message: "Veuillez vérifier votre email.",
            },
          ]}
          name={id}
        >
          <Input placeholder={label} style={{ width: "100%" }} />
        </Form.Item>
      );
      break;
    case "phone":
      inputComponent = (
        <Form.Item
          label={label}
          rules={[
            {
              required,
              message: `${label} is required`,
            },
          ]}
          name={id}
        >
          <PhoneInput placeholder={label} />
        </Form.Item>
      );
      break;
    case "upload":
      inputComponent = (
        <Form.Item
          label={label}
          rules={[
            {
              required,
              message: `${label} is required`,
            },
          ]}
          name={id}
        >
          <Dragger
            name="file"
            multiple={true}
            // action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          >
            <p className="ant-upload-drag-icon">
              <img src={uploadImage} />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </Form.Item>
      );
      break;

      case "month":
        inputComponent = (
          <Form.Item
            label={label}
            rules={[
              {
                required,
                message: `${label} is required`,
              },
            ]}
            name={id}
          >
            <DatePicker placeholder={label} picker="month" style={{width:"100%"}} />
          </Form.Item>
        );
        break;
        case "week":
          inputComponent = (
            <Form.Item
              label={label}
              rules={[
                {
                  required,
                  message: `${label} is required`,
                },
              ]}
              name={id}
            >
              <DatePicker placeholder={label} picker="week" style={{width:"100%"}} />
            </Form.Item>
          );
          break;
          case "year":
            inputComponent = (
              <Form.Item
                label={label}
                rules={[
                  {
                    required,
                    message: `${label} is required`,
                  },
                ]}
                name={id}
              >
                <DatePicker placeholder={label} picker="year" style={{width:"100%"}} />
              </Form.Item>
            );
            break;
            case "time":
              inputComponent = (
                <Form.Item
                  label={label}
                  rules={[
                    {
                      required,
                      message: `${label} is required`,
                    },
                  ]}
                  name={id}
                >
                  <DatePicker placeholder={label} picker="time" style={{width:"100%"}} />
                </Form.Item>
              );
              break;
              case "slider":
              inputComponent = (
                <Form.Item
                  label={label}
                  rules={[
                    {
                      required,
                      message: `${label} is required`,
                    },
                  ]}
                  name={id}
                >
                  <Slider placeholder={label}  style={{width:"100%"}} />
                </Form.Item>
              );
              break;
              case "TextArea":
              inputComponent = (
                <Form.Item
                  label={label}
                  rules={[
                    {
                      required,
                      message: `${label} is required`,
                    },
                  ]}
                  name={id}
                >
                  <TextArea placeholder={label}  style={{width:"100%"}} />
                </Form.Item>
              );
              break;

    default:
      inputComponent = null;
  }

  return (
    <Col style={{ marginBottom: "8px" }} lg={22}>
      {inputComponent}
      {/* {type === "checkbox" || type === "radio" ? (
        <Button onClick={() => onRemove(id)}>
          <MinusCircleOutlined />
          Remove Options
        </Button>
      ) : null} */}
    </Col>
  );
};

// Inside AddItemForm component
const AddItemForm = ({ visible, onClose, onAddItem, selectedInputDetails }) => {
  const [form] = Form.useForm();
  const [options, setOptions] = useState([]);
  

  useEffect(() => {
    form.setFieldsValue({
      label: selectedInputDetails.label,
      type: selectedInputDetails.type,
      required: selectedInputDetails.required || false,
    });
  }, [selectedInputDetails]);

  const onFinish = (values) => {
    onAddItem({ ...selectedInputDetails, ...values, options });
    form.resetFields();
    onClose();
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const removeOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  return (
    <Drawer
      title="Edit Input Item"
      placement="right"
      closable={true}
      onClose={onClose}
      visible={visible}
      width={400}
    >
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="label"
          label="Label"
          rules={[{ required: true, message: "Label is required" }]}
        >
          <Input placeholder="Enter label" />
        </Form.Item>

        {/* <Form.Item
          name="type"
          label="Type"
          rules={[{ required: true, message: "Type is required" }]}
        >
          <Input placeholder="Enter type (text, number, date, checkbox, radio)" />
        </Form.Item> */}

        {selectedInputDetails.type === "checkbox" ||
        selectedInputDetails.type === "radio" ||
        selectedInputDetails.type === "select" ? (
          <>
            <Form.Item name="options" label="Options">
              {options.map((option, index) => (
                <div
                  key={index}
                  style={{ display: "flex", marginBottom: "8px" }}
                >
                  <Input
                    value={option || ""}
                    placeholder={`Option ${index + 1}`}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  />
                  <Button type="danger" onClick={() => removeOption(index)}>
                    Remove
                  </Button>
                </div>
              ))}
            </Form.Item>
            <Button type="dashed" onClick={addOption}>
              Add Option
            </Button>
          </>
        ) : null}

        {selectedInputDetails.type==="slider"? (
          <>
          <Form.Item name="min" label="Min">
          <InputNumber  />
         
          </Form.Item>
          <Form.Item name="max" label="Max">
             <InputNumber />
          </Form.Item></>
        ) : null}


        <Form.Item name="required" label="Required" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

function Home() {
  const [selectedInputs, setSelectedInputs] = useState([]);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedInputDetails, setSelectedInputDetails] = useState({});

  const onDragStart = (e, id, label, type, options) => {
    e.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ id, label, type, options })
    );
  };

  const onDrop = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    setSelectedInputs([...selectedInputs, data]);
  };

  const onRemoveOptions = (id) => {
    const updatedSelectedInputs = selectedInputs.map((input) =>
      input.id === id
        ? { ...input, options: undefined } // Remove options for checkbox and radio
        : input
    );
    setSelectedInputs(updatedSelectedInputs);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const addNewItem = (values) => {
    const newItem = {
      ...selectedInputDetails,
      label: values.label,
      type: values.type,
      options: values.options,
      required: values.required,
    };
    const updatedInputs = selectedInputs.map((input) =>
      input.id === selectedInputDetails.id ? newItem : input
    );
    setSelectedInputs(updatedInputs);
    closeDrawer();
  };

  const editInputDetails = (id, label, type, options, required) => {
    setSelectedInputDetails({ id, label, type, options, required });
  };

  return (
    <Row gutter={[16, 16]} style={{ width: "100vw" }}>
      <Col lg={6} className={classes.availableFields}>
        <h2>Available Inputs</h2>
        <Row gutter={[16, 16]} style={{ padding: "1rem" }}>
          <DraggableInput
            id={uuidv4()}
            label="Text Input"
            type="text"
            options={undefined}
          />
          <DraggableInput
            id={uuidv4()}
            label="Number Input"
            type="number"
            options={undefined}
          />
          <DraggableInput
            id={uuidv4()}
            label="Date Picker"
            type="date"
            options={undefined}
          />
          <DraggableInput
            id={uuidv4()}
            label="Checkbox"
            type="checkbox"
            options={[]}
          />
          <DraggableInput
            id={uuidv4()}
            label="Radio Group"
            type="radio"
            options={[]}
          />
          <DraggableInput
            id={uuidv4()}
            label="Select"
            type="select"
            options={[]}
          />
          <DraggableInput
            id={uuidv4()}
            label="Password"
            type="password"
            options={undefined}
          />
          <DraggableInput
            id={uuidv4()}
            label="Email"
            type="email"
            options={undefined}
          />
          <DraggableInput
            id={uuidv4()}
            label="Phone"
            type="phone"
            options={undefined}
          />
          <DraggableInput
            id={uuidv4()}
            label="Upload"
            type="upload"
            options={undefined}
          />
          <DraggableInput
            id={uuidv4()}
            label="Year"
            type="year"
            options={undefined}
          />
          <DraggableInput
            id={uuidv4()}
            label="Week"
            type="week"
            options={undefined}
          />
          <DraggableInput
            id={uuidv4()}
            label="Month"
            type="month"
            options={undefined}
          />
          <DraggableInput
            id={uuidv4()}
            label="Time"
            type="time"
            options={undefined}
          />
           <DraggableInput
            id={uuidv4()}
            label="Slider"
            type="slider"
            options={undefined}
          />
          <DraggableInput
            id={uuidv4()}
            label="TextArea"
            type="TextArea"
            options={undefined}
          />
        </Row>
      </Col>

      <Col
        lg={18}
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className={classes.dragCol}
      >
        <h2>Drag Inputs Here</h2>
        <div className={classes.dragInputs} >
        <ColorPicker defaultValue="white" />
          {selectedInputs.map(
            ({ id, label, type, options, required }, index) => (
              <Row
                key={index}
                onClick={() => {
                  editInputDetails(id, label, type, options, required);
                }}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <DroppedInput
                  key={id}
                  id={id}
                  label={label}
                  type={type}
                  options={options}
                  showDrawer={showDrawer}
                  required={required}
                />
                <EditOutlined onClick={showDrawer} />
              </Row>
            )
          )}
        </div>
      </Col>

      <AddItemForm
        visible={drawerVisible}
        onClose={closeDrawer}
        onAddItem={addNewItem}
        selectedInputDetails={selectedInputDetails}
      />
    </Row>
  );
}

export default Home;