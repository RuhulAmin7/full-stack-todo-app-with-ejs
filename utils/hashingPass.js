const bcrypt = require('bcrypt');

const hashStr = async (str) => {
  try {
    return await bcrypt.hash(str, 5);
  } catch (error) {
    throw error;
  }
};

module.exports = hashStr;
