import { createContext } from "react";
import { StatfeedEvent } from "../models/StatfeedEvent/StatfeedEvent";

export interface StatfeedInfoContextModel {
  statfeedInfo: StatfeedEvent | null;
  setStatfeedInfo: (newStatfeedInfo: StatfeedEvent | null) => void;
}

export const DEFAULT_STATFEED_INFO: StatfeedEvent = {
  event_name: "",
  main_target: {
    id: "",
    name: "",
    team_num: -1,
  },
  secondary_target: {
    id: "",
    name: "",
    team_num: -1,
  },
  type: "",
};

export const StatfeedInfoContext = createContext<StatfeedInfoContextModel>({
  statfeedInfo: DEFAULT_STATFEED_INFO,
  setStatfeedInfo: (NEWSTATFEEDINFO: StatfeedEvent | null) => {},
});
