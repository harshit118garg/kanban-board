import { API_RESPONSE, BoardData, Ticket } from "../definations/types";

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getTicketStatus = (data: API_RESPONSE) => {
  return Object.keys(data);
};

export const getTickets = (status: string, data: API_RESPONSE): BoardData => {
  return {
    status: status,
    tickets: data[status],
  };
};

export const truncate = (str: string) => {
  return str.length > 40 ? str.slice(0, 40 - 1) + "....." : str;
};

export const getExpandTicket = (
  expandTicketIdx: string,
  data: API_RESPONSE
): Ticket => {
  const newObj = Object.values(data).flat();
  const expandTicket: Ticket = newObj.filter((obj) => obj._id === expandTicketIdx)[0];
  return expandTicket;
};
