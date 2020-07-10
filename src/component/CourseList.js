import React, {  useContext } from 'react';
import Course from './Course';
import { CourseContext } from '../CourseContext';

const CourseList = () => {
  const [courses, setCourse] = useContext(CourseContext);
  return (
    <div>
      {courses.map(course => (
        <Course name={course.name} key={course.id} ></Course>
      ))}
    </div>
  );
};

export default CourseList;
