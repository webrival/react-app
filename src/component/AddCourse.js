import React, { useState, useContext} from 'react';
import { CourseContext } from '../CourseContext';

const AddCourse = () => {
  const [name, setName] = useState('')
  const [course, setCourse] = useContext(CourseContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const addCourse = e => {
    e.preventDefault();
    setCourse(prevCourse => [...prevCourse, { name: name}]);
  };

  return (
    <div>
      <h3>Suggest A Course for Us</h3>
<form onSubmit={addCourse}>
      <input
        type='text'
        name='name'
        placeholder='Course'
        value={name}
        onChange={updateName}
      />
      <button>Suggest</button>
    </form>
    </div>
    
  );
};

export default AddCourse;
