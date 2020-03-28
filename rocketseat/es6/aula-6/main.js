const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok');
  }, 2000);
})

/*async function executePromise() {
  const response = await minhaPromise();
  console.log(response);
}*/

minhaPromise()
  .then(respose => {
    console.log(respose);
  })
  .catch(err => {
    console.error(err);
});

const executePromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
};


executePromise();