import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../definations/constants";
import { API_RESPONSE, SliceInitialState } from "../definations/types";

const initialState: SliceInitialState = {
  expandTicketIdx: "",
};

export const kanbanBoardState = createSlice({
  name: "kanbanBoardState",
  initialState,
  reducers: {
    setExpandTicketIdx: (
      state,
      action: PayloadAction<{ expandTicketIdx: string }>
    ) => {
      state.expandTicketIdx = action.payload.expandTicketIdx;
    },
  },
});

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});

export const kanbanAPISlice = createApi({
  reducerPath: "kanbanAPI",
  baseQuery,
  tagTypes: ["tickets"],
  endpoints: (builder) => ({
    getTicketsData: builder.query<API_RESPONSE, {}>({
      query: () => `/tickets`,
    }),
  }),
});

export const { setExpandTicketIdx } = kanbanBoardState.actions;

export default kanbanBoardState.reducer;

export const { useGetTicketsDataQuery } = kanbanAPISlice;
