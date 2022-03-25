import React from 'react';
import { Link } from 'react-router-dom';
import { ClassesInterface } from '../../utils/constant';

function ClassCard({
  detail = false,
  data: { id, name, mentors, description },
}: ClassesInterface) {
  return (
    <div className="class-card">
      <h3>
        Kelas-
        {id}
      </h3>
      <p>{detail ? description : name}</p>
      {!detail && (
        <button type="button">
          <Link to={`/detail/${id}`}>Details</Link>
        </button>
      )}
      {detail &&
        mentors?.map((item) => (
          <div>
            <h3>
              Mentor-{item.id}-{item.name}
            </h3>
            <p>{item.description}</p>
          </div>
        ))}
    </div>
  );
}

export default ClassCard;
