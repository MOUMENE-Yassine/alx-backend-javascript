export default function getStudentIdsSum(ListStudents) {
  if (!Array.isArray(ListStudents)) return 0;
  return ListStudents.map((student) => student.id).reduce(
    (prev, next) => prev + next,
    0,
  );
}
