import React from 'react';
import { ClassesInterface } from '../../utils/constant';

function ClassCard({ data: { id, name } }: ClassesInterface) {
  return (
    <div className="class-card">
      <h3>
        Kelas-
        {id}
      </h3>
      <p>{name}</p>
      <button type="button">Details</button>
    </div>
  );
}

export default ClassCard;
