"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubBlog = void 0;
const undici_1 = require("undici");
const github_query_1 = require("./utils/github-query");
const pager_1 = require("./utils/pager");
const sdk_1 = require("./core/sdk");
const getPosts_1 = require("./methods/getPosts");
const getPinnedPosts_1 = require("./methods/getPinnedPosts");
const getPost_1 = require("./methods/getPost");
const getPostById_1 = require("./methods/getPostById");
const getComments_1 = require("./methods/getComments");
const getLabels_1 = require("./methods/getLabels");
class GithubBlog {
    constructor(params) {
        this.getPosts = (0, getPosts_1.getPosts)(this);
        this.getPost = (0, getPost_1.getPost)(this);
        this.getPostById = (0, getPostById_1.getPostById)(this);
        this.getComments = (0, getComments_1.getComments)(this);
        this.getLabels = (0, getLabels_1.getLabels)(this);
        this.getPinnedPosts = (0, getPinnedPosts_1.getPinnedPosts)(this);
        this.repo = params.repo;
        const request = (query, variables) => __awaiter(this, void 0, void 0, function* () {
            const body = JSON.stringify({
                query,
                variables,
            });
            const response = yield (0, undici_1.fetch)("https://api.github.com/graphql", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${params.token}`,
                },
                body,
            });
            const result = (yield response.json());
            if (result.data) {
                return result.data;
            }
            const status = `${response.status} ${response.statusText}`;
            throw Error(`${status}\n${body}\n${JSON.stringify(result)}`);
        });
        this.sdk = (0, sdk_1.getSdk)(request);
        const buildQuery = (0, github_query_1.githubQueryBuilder)(this.repo);
        this.buildQuery = (args) => buildQuery(args, params.queryDefaults);
        this.buildPager = (args) => (0, pager_1.buildPager)(args, params.paginationDefaults);
    }
}
exports.GithubBlog = GithubBlog;
