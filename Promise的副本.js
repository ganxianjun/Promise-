Promise.reject(1)
.then(value => {
    console.log('value', value);
    throw 'no no no!';
})
.catch(err => {
    console.log('err', err)
})
.catch(err => {
    console.log('err2', err)
})