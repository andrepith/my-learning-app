import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import ClassCard from '../../components/ClassCard';
import { getDetailClass } from '../../service';

function Detail() {
  const [data, setData] = useState({});
  const params = useParams();

  const getData = useCallback(async () => {
    const res = await getDetailClass(params.id!);
    setData(res);
  }, [params.id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="detail">
      <h1>Class Detail</h1>
      {!!Object.keys(data).length && <ClassCard detail data={data} />}
    </div>
  );
}

export default Detail;
