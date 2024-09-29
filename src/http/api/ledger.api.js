import request from "@/http/http.request.js";

/**
 * saveOrUpdate
 * @param {object} params LedgerEntity_SaveOrUpdate
 * @param {string} params.id
 * @param {number} params.year
 * @param {number} params.month
 * @param {number} params.day
 * @param {array} params.details
 * @returns
 */
export function saveOrUpdate(params) {
    return request.post(`/api/ledger/saveOrUpdate`, params);
}

export function getLedger(params) {
    return request.get(`/api/ledger/ledgers`, params);
}

/**
 * 获取账本-年
 * @param {string} year
 * @returns
 */
export function getLedgerByYear(year) {
    return request.get(`/api/ledger/ledgers/${year}`);
}

/**
 * 获取账本-月
 */
export function getLedgerByMonth(year, month) {
    return request.get(`/api/ledger/ledgers/${year}/${month}`);
}