type SortOrderType = 'ASC' | 'DESC';

declare interface FilterOptionsInterface {
    table: string;
    page?: number;
    limit?: number;
    sort?: string;
    sortOrder?: SortOrderType;
    fields?: string[];
    filters?: Record<string, any>;
}

export class ApiFeature {
    #_queryString: string | null = null;
    #_filterOptions: FilterOptionsInterface;

    constructor(tableName: string) {
        this.#_filterOptions = {
            table: tableName,
            page: 1,
            limit: 10,
            sort: 'id',
            sortOrder: 'ASC',
            fields: ['*'],
            filters: {},
        };
    }

    paginate(page: number = 1, limit: number = 10) {
        this.#_filterOptions.limit = limit;
        this.#_filterOptions.page = page;
        return this;
    }

    filter(queries: Record<string, any>) {
        const allQuery = { ...queries };
        const excludedFields = ['limit', 'page', 'sort', 'fields'];

        excludedFields.forEach((exf) => {
            delete allQuery[exf];
        });

        console.log(allQuery);

        this.#_filterOptions.filters = {
            title: "= 'Venom 3'",
            rating: 'BETWEEN 3 AND 5',
            year: '< 20000',
        };

        return this;
    }

    limitFields(selectedFields: string[]) {
        this.#_filterOptions.fields = selectedFields;
        return this;
    }

    sort(sortField: string = this.#_filterOptions.sort) {
        let sortOrder: SortOrderType = 'ASC';

        if (sortField.at(0) == '-') {
            sortField = sortField.slice(1, sortField.length);
            sortOrder = 'DESC';
        }

        this.#_filterOptions.sort = sortField;
        this.#_filterOptions.sortOrder = sortOrder;
        return this;
    }

    trending() {
        this.#_filterOptions.filters.trending_score = '> 80';
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

    smartSearch(searchTerm: string) {
        this.#_filterOptions.filters = {
            title: `LIKE '%${searchTerm}%'`,
            description: `LIKE '%${searchTerm}%'`,
            genre: `LIKE '%${searchTerm}%'`,
        };
        return this;
    }

    getQuery(): {
        queryString: string;
        limit: number;
        page: number;
        filters: Record<string, any>;
    } {
        const selectedFields = this.#_filterOptions.fields.join(', ');
        const offset = (this.#_filterOptions.page - 1) * this.#_filterOptions.limit;
    
        let filterQuery: string = Object.entries(this.#_filterOptions.filters).length ? ' WHERE ' : '';
    
        Object.entries(this.#_filterOptions.filters).forEach((fl, i, arr) => {
            if (arr.length - 1 == i) {
                filterQuery += `${fl[0]} ${fl[1]} `;
            } else {
                filterQuery += `${fl[0]} ${fl[1]} AND `;
            }
        });
    
        this.#_queryString = `SELECT ${selectedFields} FROM ${this.#_filterOptions.table} ${filterQuery}
        ORDER BY ${this.#_filterOptions.sort} ${this.#_filterOptions.sortOrder}
        LIMIT ${this.#_filterOptions.limit} 
        OFFSET ${offset};`;
    
        return {
            queryString: this.#_queryString,
            limit: this.#_filterOptions.limit,
            page: this.#_filterOptions.page,
            filters: this.#_filterOptions.filters,
        };
    }
    
}
