const filter = async (filterParams) => {
  try {
    console.log(filterParams);
    return Promise.resolve();
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};

module.exports = {
  filter,
};
