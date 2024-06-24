import { Fragment } from "react/jsx-runtime";
import { getTicketStatus, getTickets } from "../utils/helpers";
import Board from "../components/Board";
import { API_RESPONSE } from "../definations/types";

export default function Container({ data }: { data: API_RESPONSE }) {
  const boardStatus = getTicketStatus(data);

  return (
    <div className="p-8 h-full dark:text-textColLight">
      <div className="p-6 h-full grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {boardStatus?.map((status: string) => {
          const boardData = getTickets(status, data);
          console.log("boardData", boardData);
          return (
            <Fragment key={status}>
              <Board boardData={boardData} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
