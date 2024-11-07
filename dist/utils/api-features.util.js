"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ApiFeature__queryString, _ApiFeature__filterOptions;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiFeature = void 0;
class ApiFeature {
    constructor(tableName) {
        _ApiFeature__queryString.set(this, null);
        _ApiFeature__filterOptions.set(this, void 0);
        __classPrivateFieldSet(this, _ApiFeature__filterOptions, {
            table: tableName,
            page: 1,
            limit: 10,
            sort: 'id',
            sortOrder: 'ASC',
            fields: ['*'],
            filters: {},
        }, "f");
    }
    paginate(page = 1, limit = 10) {
        __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").limit = limit;
        __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").page = page;
        return this;
    }
    filter(queries) {
        const allQuery = { ...queries };
        const excludedFields = ['limit', 'page', 'sort', 'fields'];
        excludedFields.forEach((exf) => {
            delete allQuery[exf];
        });
        console.log(allQuery);
        __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").filters = {
            title: "= 'Venom 3'",
            rating: 'BETWEEN 3 AND 5',
            year: '< 20000',
        };
        return this;
    }
    limitFields(selectedFields) {
        __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").fields = selectedFields;
        return this;
    }
    sort(sortField = __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").sort) {
        let sortOrder = 'ASC';
        if (sortField.at(0) == '-') {
            sortField = sortField.slice(1, sortField.length);
            sortOrder = 'DESC';
        }
        __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").sort = sortField;
        __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").sortOrder = sortOrder;
        return this;
    }
    trending() {
        __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").filters.trending_score = '> 80';
        return this;
    }
    latest() {
        this.sort('created_at DESC');
        return this;
    }
    mostReviewed() {
        this.sort('reviews_count DESC');
        return this;
    }
    smartSearch(searchTerm) {
        __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").filters = {
            title: `LIKE '%${searchTerm}%'`,
            description: `LIKE '%${searchTerm}%'`,
            genre: `LIKE '%${searchTerm}%'`,
        };
        return this;
    }
    getQuery() {
        const selectedFields = __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").fields.join(', ');
        const offset = (__classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").page - 1) * __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").limit;
        let filterQuery = Object.entries(__classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").filters).length ? ' WHERE ' : '';
        Object.entries(__classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").filters).forEach((fl, i, arr) => {
            if (arr.length - 1 == i) {
                filterQuery += `${fl[0]} ${fl[1]} `;
            }
            else {
                filterQuery += `${fl[0]} ${fl[1]} AND `;
            }
        });
        __classPrivateFieldSet(this, _ApiFeature__queryString, `SELECT ${selectedFields} FROM ${__classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").table} ${filterQuery}
        ORDER BY ${__classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").sort} ${__classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").sortOrder}
        LIMIT ${__classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").limit} 
        OFFSET ${offset};`, "f");
        return {
            queryString: __classPrivateFieldGet(this, _ApiFeature__queryString, "f"),
            limit: __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").limit,
            page: __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").page,
            filters: __classPrivateFieldGet(this, _ApiFeature__filterOptions, "f").filters,
        };
    }
}
exports.ApiFeature = ApiFeature;
_ApiFeature__queryString = new WeakMap(), _ApiFeature__filterOptions = new WeakMap();
//# sourceMappingURL=api-features.util.js.map