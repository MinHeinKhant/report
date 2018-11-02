import React from 'react';

const Student = props => {
  return (
    <div className="">
      <div>Students</div>

      <p>{props.studentID}</p>
      <p>{props.myan}</p>
      <p>{props.eng}</p>
      <p>{props.maths}</p>
      <p>{props.phys}</p>
      <p>{props.chem}</p>
      <p>{props.bio}</p>
    </div>
  );
};

export default Student;
