"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const frontmatter_1 = require("./frontmatter");
const someYaml = "---\nkey: value\nlist:\n  - 1\n  - 2\n---";
const someData = { key: "value", list: [1, 2] };
const doc = "Here is a document\nMore of the document\nOther lines\n";
const both = someYaml + "\n" + doc;
test("should parse and strip frontmatter", () => {
    expect((0, frontmatter_1.frontmatter)(both)).toEqual({
        data: someData,
        content: doc,
    });
});
test("should support no matter", () => {
    expect((0, frontmatter_1.frontmatter)(doc)).toEqual({
        data: {},
        content: doc,
    });
});
test("should strip matter completely", () => {
    expect((0, frontmatter_1.frontmatter)(someYaml)).toEqual({
        data: someData,
        content: "",
    });
});
test("should handle thematic breaks", () => {
    const extra = "Here is a thematic break\n---\nEnd";
    expect((0, frontmatter_1.frontmatter)(both + extra)).toEqual({
        data: someData,
        content: doc + extra,
    });
});
test("should support additional newline before closing matter", () => {
    expect((0, frontmatter_1.frontmatter)("---\nkey: value\n\n---\n" + doc)).toEqual({
        data: { key: "value" },
        content: doc,
    });
});
