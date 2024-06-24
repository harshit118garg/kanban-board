import { Fragment } from "react/jsx-runtime";
import { BoardProps } from "../definations/types";
import TicketCard from "./TicketCard";

export default function Board({ boardData }: BoardProps) {
  const { status, tickets } = boardData;
  console.log("tickets", tickets);
  return (
    <div className="border-2 border-light-foreground rounded-lg dark:border-dark-foreground p-4 max-h-[80vh]">
      <h4 className="uppercase text-center border-b-2 mb-4">{status}</h4>
      <div className="droppable-area max-h-[70vh] overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-3 max-h-full">
          {tickets.map((ticket) => {
            return (
              <Fragment key={ticket._id}>
                <TicketCard ticketInfo={ticket} mode={"board"} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
