export = FormData;
/** @class */
declare class FormData {
    get boundary(): string;
    /**
     * Adds a property to the FormData object
     * @param {string} key Property key
     * @param {string} value Property value
     */
    append(key: string, value: string): void;
    /**
     * @returns {string}
     */
    toString(): string;
    #private;
}
