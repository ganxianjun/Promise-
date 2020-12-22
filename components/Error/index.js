try {
    throw 1;
    console.log('haha 我进去了')
}
catch(e) {
    console.dir(e);
}
finally {
    console.log('finally');
}