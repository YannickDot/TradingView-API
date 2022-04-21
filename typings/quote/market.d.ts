declare function _exports(quoteSession: import('./session').QuoteSessionBridge): {
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
        /**
         * @param {MarketEvent} ev Client event
         * @param {...{}} data Packet data
         */
        "__#3@#handleEvent"(ev: MarketEvent, ...data: {}[]): void;
        "__#3@#handleError"(...msgs: any[]): void;
        /**
         * When quote market is loaded
         * @param {() => void} cb Callback
         * @event
         */
        onLoaded(cb: () => void): void;
        /**
         * When quote data is received
         * @param {(data: {}) => void} cb Callback
         * @event
         */
        onData(cb: (data: {}) => void): void;
        /**
         * When quote event happens
         * @param {(...any) => void} cb Callback
         * @event
         */
        onEvent(cb: (...any: any[]) => void): void;
        /**
         * When quote error happens
         * @param {(...any) => void} cb Callback
         * @event
         */
        onError(cb: (...any: any[]) => void): void;
        /** Close this listener */
        close(): void;
    };
};
export = _exports;
export type MarketEvent = 'loaded' | 'data' | 'error';
