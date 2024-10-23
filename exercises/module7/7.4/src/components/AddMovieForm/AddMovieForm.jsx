import { Input, InputNumber, Button, Form } from "antd";
const { TextArea } = Input;

const AddMovieForm = ({ onMovieAdded }) => {
  const onFinish = (values) => {
    console.log("To be added:", values);
    onMovieAdded(values);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Form
        onFinish={onFinish}
        layout="horizontal"
        style={{
          width: 600,
        }}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
      >
        <Form.Item
          label="Titre"
          name="title"
          rules={[
            {
              required: true,
              message: "Veuillez introduire votre titre de film !",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Réalisateur"
          name="director"
          rules={[
            {
              required: true,
              message: "Veuillez introduire le réalisateur de votre film !",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          type="number"
          label="Durée"
          name="duration"
          status={{}}
          rules={[
            {
              required: true,
              message: "Veuillez introduire la durée de votre film !",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="URL de l'image"
          name="imageUrl"
          rules={[
            {
              type: "url",
              required: true,
              message:
                "Veuillez introduire une URL valide pour l'image de votre film !",
            },
          ]}
        >
          <Input placeholder="https://example.com/image.jpg" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[
            { message: "Veuillez introduire la description de votre film !" },
          ]}
        >
          <TextArea />
        </Form.Item>

        <Form.Item
          type="number"
          label="Budget"
          name="budget"
          rules={[
            {
              required: false,
              message: "Veuillez introduire le budget de votre film !",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Ajouter
        </Button>
      </Form>
    </div>
  );
};

export default AddMovieForm;
