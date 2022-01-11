module.exports.selectById = async (data) => {
    let response = { status: false };
    try {
        const doc = await data.model.findById(data._id, data.projection);
        response = {
        result: doc,
        status: true,
        };
    } catch (err) {
        response.error = error;
        console.log('ERROR-repository-selectById: ', err);
    }
    return response;
}