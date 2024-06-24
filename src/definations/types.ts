import { ReactNode } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface SliceInitialState {
  expandTicketIdx: string;
}

export interface API_RESPONSE {
  data: Record<TicketStatus, Ticket[]>;
}

export interface Ticket {
  _id: string;
  ticketTitle: string;
  ticketSubTitle: string;
  ticketDescription: string;
  prio: PRIORITY;
}
 
export type TicketStatus = "backlog" | "inProgress" | "inReview" | "resolved";

export type PRIORITY = "P1" | "P2" | "P3";

export interface BoardProps {
  boardData: BoardData;
}

export interface BoardData {
  status: string;
  tickets: Ticket[];
}