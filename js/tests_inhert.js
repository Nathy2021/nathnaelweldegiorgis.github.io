

let assert = chai.assert;


describe("Removing words from sentence", () => {
    it("Filtering words", () => {
        assert.deepEqual("This is not and never don't nice house".filter("not ", 'never ', 'don\'t '), "This is and nice house");
    });
});


describe("Sort using the BubbleSort algorithm", () => {
    it("Sorting numbers", () => {
        assert.deepEqual([6, 4, 0, 3, -2, 1].bubbleSort(), [-2, 0, 1, 3, 4, 6]);
    });
});


describe("Display inheritances from object", () => {
    var him = new Teacher();
    him.initialize("Adam", 45);
    it("Passing parameters", () => {
        assert.deepEqual(him.teach("Inheritance"), "Adam is now teaching Inheritance");
    });
});