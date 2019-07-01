import _ from 'lodash';
import { Village, Report } from '@/items';
import { query, queryAll, queryLocGroup } from '@/utils/dom';

const locationGroup = (s: string) => queryLocGroup(s, Village)

const currentVillage = () => new Village(query('li.on[data-village_id]'))

const mainCity = () => new Village(query('.my_capital li'))

const myVillages = () => locationGroup('.my_country.village li')

const myFronts = () => locationGroup('.other_country li:not(.head)')

const reports = () => _.chain(queryAll('table.p_report tr:not(:nth-child(1))')).map(el => new Report(el))

const totalMoney = () => {
    const el = query('.money_b')
    return el ? Number(el.textContent) : 0
}

export {
    currentVillage, // current selected village
    mainCity,       // player's main village
    myFronts,       // player's fronts
    myVillages,     // all villages of player
    reports,        // all reports wappered by lodash，need call value method if fetch real data.
    totalMoney,
}