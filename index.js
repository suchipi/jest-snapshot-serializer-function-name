module.exports = {
  test: function test(val) {
    return (
      (typeof val === "function" ||
        {}.toString.call(val) === "[object Function]") &&
      !val._isMockFunction
    );
  },
  print: function print(val, serialize, indent) {
    if (val.name === "") {
      return "[Function anonymous]";
    } else {
      return "[Function " + val.name + "]";
    }
  },
};
