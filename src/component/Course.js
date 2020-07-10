import React, { useContext } from 'react';
import { CourseContext } from '../CourseContext';

const CourseList = ({name}) => {
  return (
    <div>
      <h6>{name}</h6>
    </div>
  );
};

export default CourseList;
