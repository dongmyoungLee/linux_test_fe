import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormList = (props) => {
  const [demos, setDemos] = useState([]);

  useEffect(() => {
    // 서버에서 데이터를 가져오는 API 엔드포인트에 요청을 보내세요.
    axios.get('http://localhost:8001/api/v1/demo')
      .then(response => {
        setDemos(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [props.observer]);

  return (
    <div className="form-list">
      <h2>Form List</h2>
      <ul>
        {demos.length != 0 ? demos.map(demo => (
          <li key={demo.id}>
            <strong>{demo.name}</strong>: {demo.description}
          </li>
        )) : <p>로딩중 이거나 데이터 아직 없음</p>}
      </ul>
    </div>
  );
};

export default FormList;