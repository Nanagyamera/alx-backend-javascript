export default function getStudentsByLocation(studentList, city) {
  if (students instanceof Array) {
    return studentList.filter(student => student.location === city);
  }
  return [];
}
