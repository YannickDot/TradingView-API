export = Client;
declare class Client {
    /**
     * @typedef {Object} ClientOptions
     * @prop {string} [token] User auth token (in 'sessionid' cookie)
     * @prop {boolean} [DEBUG] Enable debug mode
     */
    /** Client object
     * @param {ClientOptions} clientOptions TradingView client options
     */
    constructor(clientOptions?: {
        /**
         * User auth token (in 'sessionid' cookie)
         */
        token?: string;
        /**
         * Enable debug mode
         */
        DEBUG?: boolean;
    });
    /** If the client is logged in */
    get isLogged(): boolean;
    /** If the cient was closed */
    get isOpen(): boolean;
    /**
     * When client is connected
     * @param {() => void} cb Callback
     * @event onConnected
     */
    onConnected(cb: () => void): void;
    /**
     * When client is disconnected
     * @param {() => void} cb Callback
     * @event onDisconnected
     */
    onDisconnected(cb: () => void): void;
    /**
     * @typedef {Object} SocketSession
     * @prop {string} session_id Socket session ID
     * @prop {number} timestamp Session start timestamp
     * @prop {number} timestampMs Session start milliseconds timestamp
     * @prop {string} release Release
     * @prop {string} studies_metadata_hash Studies metadata hash
     * @prop {'json' | string} protocol Used protocol
     * @prop {string} javastudies Javastudies
     * @prop {number} auth_scheme_vsn Auth scheme type
     * @prop {string} via Socket IP
     */
    /**
     * When client is logged
     * @param {(SocketSession: SocketSession) => void} cb Callback
     * @event onLogged
     */
    onLogged(cb: (SocketSession: {
        /**
         * Socket session ID
         */
        session_id: string;
        /**
         * Session start timestamp
         */
        timestamp: number;
        /**
         * Session start milliseconds timestamp
         */
        timestampMs: number;
        /**
         * Release
         */
        release: string;
        /**
         * Studies metadata hash
         */
        studies_metadata_hash: string;
        /**
         * Used protocol
         */
        protocol: 'json' | string;
        /**
         * Javastudies
         */
        javastudies: string;
        /**
         * Auth scheme type
         */
        auth_scheme_vsn: number;
        /**
         * Socket IP
         */
        via: string;
    }) => void): void;
    /**
     * When server is pinging the client
     * @param {(i: number) => void} cb Callback
     * @event onPing
     */
    onPing(cb: (i: number) => void): void;
    /**
     * When unparsed data is received
     * @param {(...{}) => void} cb Callback
     * @event onData
     */
    onData(cb: (...{}) => void): void;
    /**
     * When a client error happens
     * @param {(...{}) => void} cb Callback
     * @event onError
     */
    onError(cb: (...{}) => void): void;
    /**
     * When a client event happens
     * @param {(...{}) => void} cb Callback
     * @event onEvent
     */
    onEvent(cb: (...{}) => void): void;
    /** @type {SendPacket} Send a custom packet */
    send(t: string, p?: string[]): void;
    /** Send all waiting packets */
    sendQueue(): void;
    /** @namespace Session */
    Session: {
        Quote: {
            new (options?: {
                /**
                 * Asked quote fields
                 */
                fields?: "all" | "price";
                /**
                 * List of asked quote fields
                 */
                customFields?: quoteSessionGenerator.quoteField[];
            }): {
                "__#4@#sessionID": string;
                "__#4@#client": ClientBridge;
                "__#4@#symbolListeners": {
                    [x: string]: Function[];
                };
                "__#4@#quoteSession": quoteSessionGenerator.QuoteSessionBridge;
                Market: {
                    new (symbol: string): {
                        "__#3@#symbolListeners": {
                            [x: string]: Function[];
                        };
                        "__#3@#symbol": string;
                        "__#3@#symbolListenerID": number;
                        "__#3@#lastData": {};
                        "__#3@#callbacks": {
                            loaded: any[];
                            data: any[];
                            event: any[];
                            error: any[];
                        };
                        "__#3@#handleEvent"(ev: import("./quote/market").MarketEvent, ...data: {}[]): void;
                        "__#3@#handleError"(...msgs: any[]): void;
                        onLoaded(cb: () => void): void;
                        onData(cb: (data: {}) => void): void;
                        onEvent(cb: (...any: any[]) => void): void;
                        onError(cb: (...any: any[]) => void): void;
                        close(): void;
                    };
                };
                delete(): void;
            };
        };
        Chart: {
            new (): {
                "__#7@#chartSessionID": string;
                "__#7@#replaySessionID": string;
                "__#7@#replayMode": boolean;
                "__#7@#replayOKCB": {
                    [x: string]: () => any;
                };
                "__#7@#client": ClientBridge;
                "__#7@#studyListeners": {
                    [x: string]: Function[];
                };
                "__#7@#periods": {
                    [x: number]: chartSessionGenerator.PricePeriod[];
                };
                readonly periods: chartSessionGenerator.PricePeriod[];
                "__#7@#infos": chartSessionGenerator.MarketInfos;
                readonly infos: chartSessionGenerator.MarketInfos;
                "__#7@#callbacks": {
                    seriesLoaded: any[];
                    symbolLoaded: any[];
                    update: any[];
                    replayLoaded: any[];
                    replayPoint: any[];
                    replayResolution: any[];
                    replayEnd: any[];
                    event: any[];
                    error: any[];
                };
                "__#7@#handleEvent"(ev: chartSessionGenerator.ChartEvent, ...data: {}[]): void;
                "__#7@#handleError"(...msgs: any[]): void;
                "__#7@#seriesCreated": boolean;
                "__#7@#currentSeries": number;
                setSeries(timeframe?: import("./types").TimeFrame, range?: number, reference?: number): void;
                setMarket(symbol: string, options?: {
                    timeframe?: import("./types").TimeFrame;
                    range?: number;
                    to?: number;
                    adjustment?: "splits" | "dividends";
                    session?: "regular" | "extended";
                    currency?: string;
                    type?: chartSessionGenerator.ChartType;
                    inputs?: chartSessionGenerator.ChartInputs;
                    replay?: number;
                }): void;
                setTimezone(timezone: import("./types").Timezone): void;
                fetchMore(number?: number): void;
                replayStep(number?: number): Promise<any>;
                replayStart(interval?: number): Promise<any>;
                replayStop(): Promise<any>;
                onSymbolLoaded(cb: () => void): void;
                onUpdate(cb: (changes: string[]) => void): void;
                onReplayLoaded(cb: () => void): void;
                onReplayResolution(cb: (timeframe: import("./types").TimeFrame, index: number) => void): void;
                onReplayEnd(cb: () => void): void;
                onReplayPoint(cb: (index: number) => void): void;
                onError(cb: (...any: any[]) => void): void;
                "__#7@#chartSession": chartSessionGenerator.ChartSessionBridge;
                Study: {
                    new (indicator: import("./classes/PineIndicator") | import("./classes/BuiltInIndicator")): {
                        "__#6@#studID": string; /** Client object
                         * @param {ClientOptions} clientOptions TradingView client options
                         */
                        "__#6@#studyListeners": {
                            [x: string]: Function[];
                        };
                        "__#6@#periods": {
                            [x: number]: {}[];
                        };
                        readonly periods: {}[];
                        "__#6@#indexes": number[];
                        "__#6@#graphic": {
                            [x: string]: {
                                [x: number]: {};
                            };
                        };
                        readonly graphic: import("./chart/graphicParser").GraphicData;
                        "__#6@#strategyReport": import("./chart/study").StrategyReport;
                        readonly strategyReport: import("./chart/study").StrategyReport;
                        "__#6@#callbacks": {
                            studyCompleted: any[];
                            update: any[];
                            event: any[];
                            error: any[];
                        };
                        "__#6@#handleEvent"(ev: ChartEvent, ...data: {}[]): void;
                        "__#6@#handleError"(...msgs: any[]): void;
                        instance: import("./classes/PineIndicator") | import("./classes/BuiltInIndicator");
                        setIndicator(indicator: import("./classes/PineIndicator") | import("./classes/BuiltInIndicator")): void;
                        onReady(cb: () => void): void;
                        onUpdate(cb: (changes: ("plots" | "perfReport" | "fullReport")[]) => void): void;
                        onError(cb: (...any: any[]) => void): void;
                        remove(): void;
                    };
                };
                delete(): void;
            };
        };
    };
    /**
     * Close the websocket connection
     * @return {Promise<void>} When websocket is closed
     */
    end(): Promise<void>;
    #private;
}
declare namespace Client {
    export { Session, SessionList, SendPacket, ClientBridge, ClientEvent };
}
import quoteSessionGenerator = require("./quote/session");
type ClientBridge = {
    sessions: SessionList;
    send: SendPacket;
};
import chartSessionGenerator = require("./chart/session");
type Session = {
    /**
     * Session type
     */
    type: 'quote' | 'chart' | 'replay';
    /**
     * When there is a data
     */
    onData: (data: {}) => null;
};
/**
 * Session list
 */
type SessionList = {
    [x: string]: Session;
};
/**
 * Send a custom packet
 */
type SendPacket = (t: string, p: string[]) => void;
type ClientEvent = 'connected' | 'disconnected' | 'logged' | 'ping' | 'data' | 'error' | 'event';
