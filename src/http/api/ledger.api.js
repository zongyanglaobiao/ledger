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

export function getLedger() {
    return request.get(`/api/ledger/getLedger`);
}