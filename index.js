function condSpread(cond) {
  return cond ? (val) => val : (val) => (Array.isArray(val) ? [] : {});
}

module.exports = condSpread;
