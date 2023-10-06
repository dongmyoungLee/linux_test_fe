import {useState} from "react";
import axios from "axios";

const Form = (props) => {
  const [load, setLoad] = useState(false);


  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Submitted Data:', formData);

    axios.post(process.env.NODE_ENV === 'development' ? 'http://localhost:8001/api/v1/demo' : 'http://10.128.0.4:8001/api/v1/demo', {
      name : formData.name,
      description : formData.description
    }).then((res) => {
      if (res.status == 200) {
        alert("전송성공");
        props.setObserver();
        // window.location.reload();
      }
    }).catch((err) => {
      console.log(err);
      alert("전송실패");
    })


  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">이름:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="description">설명:</label>
        <input


          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default Form;