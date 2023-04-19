export default function createIteratorObject(report) {
  const employeeList = Object.values(report.allEmployees).flat();

  let currentIndex = 0;

  return {
    next() {
      if (currentIndex < employeeList.length) {
        return { value: employeeList[currentIndex++], done: false };
      }
      return { done: true };
    },
  };
}
