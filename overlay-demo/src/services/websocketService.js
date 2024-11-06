export const webSocketService = {
    __subscribers: {},
    websocket: undefined,
    webSocketConnected: false,
    registerQueue: [],
    init: function(port, debug, debugFilters) {
        port = port || 49322;
        debug = debug || false;
        if (debug) {
            if (debugFilters !== undefined) {
                console.warn("WebSocket Debug Mode enabled with filtering. Only events not in the filter list will be dumped");
            } else {
                console.warn("WebSocket Debug Mode enabled without filters applied. All events will be dumped to console");
                console.warn("To use filters, pass in an array of 'channel:event' strings to the second parameter of the init function");
            }
        }
        webSocketService.webSocket = new WebSocket("ws://localhost:" + port);
        webSocketService.webSocket.onmessage = function (event) {
            let jEvent = JSON.parse(event.data);
            if (!jEvent.hasOwnProperty('event')) {
                return;
            }
            let eventSplit = jEvent.event.split(':');
            let channel = eventSplit[0];
            let event_event = eventSplit[1];
            if (debug) {
                if (!debugFilters) {
                    console.log(channel, event_event, jEvent);
                } else if (debugFilters && debugFilters.indexOf(jEvent.event) < 0) {
                    console.log(channel, event_event, jEvent);
                }
            }
            webSocketService.triggerSubscribers(channel, event_event, jEvent.data);
        };
        webSocketService.webSocket.onopen = function () {
            webSocketService.triggerSubscribers("ws", "open");
            webSocketService.webSocketConnected = true;
            webSocketService.registerQueue.forEach((r) => {
                webSocketService.send("wsRelay", "register", r);
            });
            webSocketService.registerQueue = [];
        };
        webSocketService.webSocket.onerror = function () {
            webSocketService.triggerSubscribers("ws", "error");
            webSocketService.webSocketConnected = false;
        };
        webSocketService.webSocket.onclose = function () {
            webSocketService.triggerSubscribers("ws", "close");
            webSocketService.webSocketConnected = false;
        };
    },
    /**
     * Add callbacks for when certain events are thrown
     * Execution is guaranteed to be in First In First Out order
     * @param channels
     * @param events
     * @param callback
     */
    subscribe: function(channels, events, callback) {
        if (typeof channels === "string") {
            let channel = channels;
            channels = [];
            channels.push(channel);
        }
        if (typeof events === "string") {
            let event = events;
            events = [];
            events.push(event);
        }
        channels.forEach(function(c) {
            events.forEach(function (e) {
                if (!webSocketService.__subscribers.hasOwnProperty(c)) {
                    webSocketService.__subscribers[c] = {};
                }
                if (!webSocketService.__subscribers[c].hasOwnProperty(e)) {
                    webSocketService.__subscribers[c][e] = [];
                    if (webSocketService.webSocketConnected) {
                        webSocketService.send("wsRelay", "register", `${c}:${e}`);
                    } else {
                        webSocketService.registerQueue.push(`${c}:${e}`);
                    }
                }
                webSocketService.__subscribers[c][e].push(callback);
            });
        })
    },
    clearEventCallbacks: function (channel, event) {
        if (webSocketService.__subscribers.hasOwnProperty(channel) && webSocketService.__subscribers[channel].hasOwnProperty(event)) {
            webSocketService.__subscribers[channel] = {};
        }
    },
    triggerSubscribers: function (channel, event, data) {
        if (webSocketService.__subscribers.hasOwnProperty(channel) && webSocketService.__subscribers[channel].hasOwnProperty(event)) {
            webSocketService.__subscribers[channel][event].forEach(function(callback) {
                if (callback instanceof Function) {
                    callback(data);
                }
            });
        }
    },
    send: function (channel, event, data) {
        if (typeof channel !== 'string') {
            console.error("Channel must be a string");
            return;
        }
        if (typeof event !== 'string') {
            console.error("Event must be a string");
            return;
        }
        if (channel === 'local') {
            this.triggerSubscribers(channel, event, data);
        } else {
            let cEvent = channel + ":" + event;
            webSocketService.webSocket.send(JSON.stringify({
                'event': cEvent,
                'data': data
            }));
        }
    }
};
