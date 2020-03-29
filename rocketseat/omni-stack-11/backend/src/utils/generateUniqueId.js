const crypto = require('crypto');

const generateUniqueId = function() {
  return crypto.randomBytes(4).toString('HEX');
};

module.exports = generateUniqueId;
