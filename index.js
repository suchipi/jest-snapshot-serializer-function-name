module.exports = {
  test: function test(val) {
    return (
      typeof val === "function" || {}.toString.call(val) === "[object Function]"
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
