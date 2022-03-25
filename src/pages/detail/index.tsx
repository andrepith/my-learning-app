import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import ClassCard from '../../components/ClassCard';
import { getDetailClass, enrollToClass } from '../../service';

const initialState = {
  classId: '',
  attendeeFullName: '',
  attendeeEmail: '',
};

interface FormDataInterface {
  classId: string;
  attendeeFullName: string;
  attendeeEmail: string;
}

function Detail() {
  const [data, setData] = useState({});
  const [formData, setFormData] = useState<FormDataInterface>(initialState);
  const params = useParams();

  const { classId, attendeeFullName, attendeeEmail } = formData;

  const onChange = (e: { target: { name: string; value: string } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getData = useCallback(async () => {
    const res = await getDetailClass(params.id!);
    setData(res);
    setFormData((prevState) => ({ ...prevState, classId: params.id! }));
  }, [params.id]);

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const body = await new URLSearchParams({
      classId,
      attendeeFullName,
      attendeeEmail,
    });
    const res = await enrollToClass(body);
    swal(res.message);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="detail">
      <h1>Class Detail</h1>
      {!!Object.keys(data).length && <ClassCard detail data={data} />}
      <form className="register-form" onSubmit={onSubmit}>
        <h3>Register User</h3>
        <div className="form-data">
          <input
            type="text"
            value={attendeeFullName}
            onChange={onChange}
            name="attendeeFullName"
            placeholder="Name"
            required
          />
        </div>
        <div className="form-data">
          <input
            type="text"
            value={attendeeEmail}
            onChange={onChange}
            name="attendeeEmail"
            placeholder="Email"
            required
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary dashboard-button"
          value="Enroll"
        />
      </form>
    </div>
  );
}

export default Detail;
