"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDataType = void 0;
const createDataType = (config) => {
    var _a;
    const Type = {};
    const FallbackType = {};
    const OutputType = {};
    const InputType = {};
    const fallback = ((_a = config.fallback) !== null && _a !== void 0 ? _a : null);
    const translate = (input) => {
        if (input == null) {
            return fallback;
        }
        try {
            return config.translator(input);
        }
        catch (error) {
            if (process.env.NODE_ENV === "debug") {
                console.log(`[GithugBlog] DataType translator failed with error: `, error);
            }
            return fallback;
        }
    };
    return Object.assign({ Type,
        FallbackType,
        OutputType,
        InputType,
        translate }, (config.fragment ? { fragment: config.fragment } : {}));
};
exports.createDataType = createDataType;
