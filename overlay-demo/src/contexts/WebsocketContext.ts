import { createContext } from "react";
import { webSocketService } from "../services/websocketService";


export const websocketContext = createContext(webSocketService);