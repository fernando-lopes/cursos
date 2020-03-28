axios.get('https://api.github.com/users/fernando-lopes')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.warn(error);
  });