import React from 'react';

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {course.parts.map(part => (
          <li key={part.id}>
            {part.name} - {part.exercises} exercises
          </li>
        ))}
        
        <li>Total of {course.parts.reduce((acc,part) =>  part.exercises+acc ,0)} exercises</li>
      </ul>
    </div>
  );
}

export default Course;