export declare class ApiFeature {
    #private;
    constructor(tableName: string);
    paginate(page?: number, limit?: number): this;
    filter(queries: Record<string, any>): this;
    limitFields(selectedFields: string[]): this;
    sort(sortField?: string): this;
    trending(): this;
    latest(): this;
    mostReviewed(): this;
    smartSearch(searchTerm: string): this;
    getQuery(): {
        queryString: string;
        limit: number;
        page: number;
        filters: Record<string, any>;
    };
}
