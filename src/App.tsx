import { useDispatch, useSelector } from "react-redux";
import TicketCard from "./components/TicketCard";
import Navbar from "./global/Navbar";
import { setExpandTicketIdx, useGetTicketsDataQuery } from "./redux/slice";
import { AppDispatch, RootState } from "./redux/store";
import Container from "./shared/Container";
import Icon from "./shared/Icon";
import { getExpandTicket } from "./utils/helpers";

function App() {
  const { data } = useGetTicketsDataQuery({});
  const dispatch = useDispatch<AppDispatch>();
  console.log("data", data);
  const { expandTicketIdx } = useSelector(
    (state: RootState) => state?.kanbanBoardState
  );
  const expandTicket =
    data && expandTicketIdx && getExpandTicket(expandTicketIdx, data);

  console.log("expandTicket", expandTicket);

  return (
    <>
      <div
        className={`h-screen w-screen bg-light-foreground dark:bg-dark-primary flex flex-col overflow-hidden`}
      >
        <Navbar />
        <main
          className={`flex-1 transition-colors duration-300 bg-light-background dark:bg-dark-background min-h-[calc(100% - 60px)]`}
        >
          {data && <Container data={data} />}
        </main>
        {expandTicket && (
          <dialog
            open={!!expandTicketIdx}
            className="fixed -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 w-[45rem] h-[25rem] mx-0 shadow-lg border-2 border-bermuda rounded-md bg-light-secondary dark:bg-dark-secondary text-white p-4"
          >
            <div className="closeModal relative mb-4">
              <button
                className="absolute right-0"
                onClick={() =>
                  dispatch(setExpandTicketIdx({ expandTicketIdx: "" }))
                }
              >
                <Icon name="x" />
              </button>
            </div>
            <TicketCard ticketInfo={expandTicket} mode={"dialog"} />
          </dialog>
        )}
      </div>
    </>
  );
}

export default App;
