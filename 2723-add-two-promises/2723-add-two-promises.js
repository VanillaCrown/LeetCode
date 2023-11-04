/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    return (await promise1) + (await promise2);
    //I used this miethod because there are only 2 promises, the simpler the better, if there were more promise to anticipate I would rather used the await method
};

