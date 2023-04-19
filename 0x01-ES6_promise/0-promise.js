export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // some asynchronous task comes here, such as calling an API
    // If the task is successful, resolve the promise
    resolve();
    // If the task fails, reject the promise
    reject();
  });
}
