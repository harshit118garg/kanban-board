import { useDispatch } from "react-redux";
import { PRIORITY_INFO } from "../definations/constants";
import { Ticket } from "../definations/types";
import Icon from "../shared/Icon";
import { truncate } from "../utils/helpers";
import { AppDispatch } from "../redux/store";
import { setExpandTicketIdx } from "../redux/slice";

export default function TicketCard({
  ticketInfo,
  mode,
}: {
  ticketInfo: Ticket;
  mode: "board" | "dialog";
}) {
  const dispatch = useDispatch<AppDispatch>();

  const prioColor = PRIORITY_INFO[ticketInfo.prio];
  return (
    <div
      className={`max-h-40 ${
        mode === "board" && "border-2 shadow-md"
      } rounded-lg p-3 relative overflow-y-auto custom-scrollbar`}
    >
      <h3 className="text-lg underline cursor-pointer">
        {ticketInfo.ticketTitle}
      </h3>
      <div className={`prio-badge ${prioColor} cursor-pointer`}>
        <span>{ticketInfo.prio}</span>
      </div>
      <p className="text-md">{ticketInfo.ticketSubTitle}</p>
      <p className="text-sm text-ellipsis">
        {mode === "board"
          ? truncate(ticketInfo.ticketDescription)
          : ticketInfo.ticketDescription}
      </p>
      {mode === "board" && (
        <div className="actions mt-4 flex w-full justify-between">
          <button
            onClick={() =>
              dispatch(setExpandTicketIdx({ expandTicketIdx: ticketInfo._id }))
            }
          >
            <Icon name="expand" />
          </button>
          <button>
            <Icon name="pencil" />
          </button>
        </div>
      )}
    </div>
  );
}
