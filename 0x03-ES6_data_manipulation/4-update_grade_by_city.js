export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList
    .filter((student) => student.location === city)
    .map((student) => {
      const foundGrade = newGrades.find(grade => grade.studentId === student.id);
      const grade = foundGrade ? foundGrade.grade : 'N/A';
      return { ...student, grade };
    });
}
