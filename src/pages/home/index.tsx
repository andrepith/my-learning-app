import React, { useState, useEffect } from 'react';
import ClassCard from '../../components/ClassCard';
import { getAvailableClass } from '../../service';

function Home() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await getAvailableClass();
    setData(res.items);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home">
      <h1>My Learning App</h1>
      <div className="available-class">
        {data.map((item) => (
          <ClassCard data={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
