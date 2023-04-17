export default function createIteratorObject(report) {
  const employeeList = Object.values(report.allEmployees).flat();

  let currentIndex = 0;

  return {
    next: function () {
      if (currentIndex < employeeList.length) {
        return { value: employeeList[currentIndex++], done: false };
      } else {
        return { done: true };
      }
    },
  };
}
