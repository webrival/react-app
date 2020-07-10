import React, { useState, createContext } from 'react';

export const CourseContext = createContext();

export const CourseProvider = props => {
  const [course, setCourse] = useState([
    {
      name: 'Angular',
      id: 1
    },
    {
      name: 'Vue.js',
      id: 2
    },
  ]);
  return (
    <CourseContext.Provider value={[course, setCourse]}>
      {props.children}
    </CourseContext.Provider>
  );
};
