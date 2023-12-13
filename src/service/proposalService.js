import http from "./http";

export function changeProposalStatusApi({ id, data }) {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}

export function createProposalApi(data) {
  return http.post(`/proposal/add`, data).then(({ data }) => data.data);
}


export function getProposalsApi(data) {
  return http.get(`/proposal/list`, data).then(({ data }) => data.data);
}
