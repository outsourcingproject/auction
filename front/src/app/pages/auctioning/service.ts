/**
 * service.js
 * Created by Huxley on 1/2/16.
 *
 * TODO(huxley): It needs to refactor to some classes with `@Injectable()` if someone want to use DI in ng2.
 */
let data = require('./config.json');

export function getHeader() { return data.header; }
export function getFilters() { return data.filters; }

let cache = [];
const CNT_PER_PAGE = 15;
const PRICE = 1;
const PRICE_CNT = 2;
const WATCHING_CNT = 3;
const END_TIME = 4;
/**
 * Get items for auctioning.
 * @param page
 * @param filters Filters[0] is the really filter and filters[1] is only the sort factor.
 * @returns {{ret: Array.<T>, end: end}} End is a mark for the final page, which should be no zero
 *  when the distance less than 3.
 */
export function getItems(page, filters) {
    let ret = cache.filter(e => {
        if (0 === filters[0]) return true;
        else return e.category === filters[0];
    });
    let res = CNT_PER_PAGE - ret.length;
    if (res > 0) {
        // TODO: Post the requests.
        do {
            let boundary = res > data.items.length ? data.items.length : res;
            let items = [];
            for (let i = 0; i < boundary; ++i) items.push(data.items[i]);
            cache = cache.concat(items);
            ret = ret.concat(items);
            res -= items.length;
        } while (res > 0);
    }
    if (0 !== filters[1]) {
        ret.sort((l, r) => {
            switch (filters[1]) {
                case PRICE: return l.price - r.price;
                case PRICE_CNT: // TODO
                case WATCHING_CNT: return l.watching_cnt - r.watching_cnt;
                case END_TIME: return l.end_time - r.end_time;
            }
        });
    }
    let end = 0;
    if (page >= 5) end = 7;
    return {ret, end};
}
