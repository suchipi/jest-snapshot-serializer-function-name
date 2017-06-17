expect.addSnapshotSerializer(require("./index"));

describe("jest-snapshot-serializer-function-name", () => {
  it("works for anonymous functions", () => {
    expect(() => {}).toMatchSnapshot();
  });

  it("works for named arrow function expressions", () => {
    const namedArrowExpression = () => {};
    expect(namedArrowExpression).toMatchSnapshot();
  });

  it("works for named function declarations", () => {
    function namedDeclaration() {}
    expect(namedDeclaration).toMatchSnapshot();
  });

  it("works for named function expressions", () => {
    const namedExpression = function() {};
    expect(namedExpression).toMatchSnapshot();
  });

  it("works for anonymous functions that were given a name later", () => {
    const renamed = Object.defineProperty(() => {}, "name", {
      value: "new name",
    });
    expect(renamed).toMatchSnapshot();
  });
});
