import React, { Component } from 'react';
import Student from './Student';
import '../../styles/components/Students.css';

export default class CurrentStudents extends Component {
  state = {
    users: [
      {
        userID: '1',
        userName: 'Ko Ko'
      },
      {
        userID: '2',
        userName: 'Mg Mg'
      }
    ],
    students: [
      {
        studentID: 'std1',
        studentName: 'student1',
        myan: '10',
        eng: '10',
        maths: '10',
        phys: '10',
        chem: '10',
        bio: '10'
      },
      {
        studentID: 'std2',
        studentName: 'student2',
        myan: '20',
        eng: '20',
        maths: '20',
        phys: '20',
        chem: '20',
        bio: '20'
      },
      {
        studentID: 'std3',
        studentName: 'student3',
        myan: '30',
        eng: '30',
        maths: '30',
        phys: '30',
        chem: '30',
        bio: '30'
      }
    ]
  };
  render() {
    const { students, ...rest } = this.state;
    console.log(rest.users);
    return (
      <div className="students container">
        {this.props.match.params.id}
        {students.map(student => (
          <Student key={student.studentID} {...student} />
        ))}
      </div>
    );
  }
}
