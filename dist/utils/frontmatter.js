"use strict";
// inspired by https://github.com/vfile/vfile-matter
Object.defineProperty(exports, "__esModule", { value: true });
exports.frontmatter = void 0;
const yaml_1 = require("yaml");
const frontmatter = (content) => {
    const match = /^---(?:\r?\n|\r)(?:([\s\S]*?)(?:\r?\n|\r))?---(?:\r?\n|\r|$)/.exec(content);
    if (match) {
        return {
            data: (0, yaml_1.parse)(match[1]),
            content: content.slice(match[0].length),
        };
    }
    return {
        data: {},
        content,
    };
};
exports.frontmatter = frontmatter;
