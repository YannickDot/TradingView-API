/// <reference types="node" />
export = request;
/**
 * @param {https.RequestOptions} options HTTPS Request options
 * @param {boolean} [raw] Get raw or JSON data
 * @param {string} [content] Request body content
 * @returns {Promise<{ data: (string | object | array), cookies: string[] }>} Result
 */
declare function request(options?: https.RequestOptions, raw?: boolean, content?: string): Promise<{
    data: (string | object | any[]);
    cookies: string[];
}>;
import https = require("https");
