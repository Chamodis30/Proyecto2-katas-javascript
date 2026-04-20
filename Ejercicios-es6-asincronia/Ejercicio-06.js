// 6.1
const total = exams.reduce((acc, exam) => acc + exam.score, 0);

// 6.2
const passed = exams
  .filter(e => e.score >= 5)
  .reduce((acc, exam) => acc + exam.score, 0);

// 6.3
const average = total / exams.length;