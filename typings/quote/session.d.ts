declare function _exports(client: import('../client').ClientBridge): {
    new (options?: {
        /**
         * Asked quote fields
         */
        fields?: 'all' | 'price';
        /**
         * List of asked quote fields
         */
        customFields?: quoteField[];
    }): {
        "__#4@#sessionID": string;
        /** Parent client */
        "__#4@#client": import("../client").ClientBridge;
        /** @type {SymbolListeners} */
        "__#4@#symbolListeners": SymbolListeners;
        /** @type {QuoteSessionBridge} */
        "__#4@#quoteSession": QuoteSessionBridge;
        /** @constructor */
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
                "__#3@#handleEvent"(ev: quoteMarketConstructor.MarketEvent, ...data: {}[]): void;
                "__#3@#handleError"(...msgs: any[]): void;
                onLoaded(cb: () => void): void;
                onData(cb: (data: {}) => void): void;
                onEvent(cb: (...any: any[]) => void): void;
                onError(cb: (...any: any[]) => void): void;
                close(): void;
            };
        };
        /** Delete the quote session */
        delete(): void;
    };
};
export = _exports;
export type SymbolListeners = {
    [x: string]: Function[];
};
export type QuoteSessionBridge = {
    sessionID: string;
    symbolListeners: SymbolListeners;
    send: import('../client').SendPacket;
};
/**
 * Quote data field
 */
export type quoteField = 'base-currency-logoid' | 'ch' | 'chp' | 'currency-logoid' | 'provider_id' | 'currency_code' | 'current_session' | 'description' | 'exchange' | 'format' | 'fractional' | 'is_tradable' | 'language' | 'local_description' | 'logoid' | 'lp' | 'lp_time' | 'minmov' | 'minmove2' | 'original_name' | 'pricescale' | 'pro_name' | 'short_name' | 'type' | 'update_mode' | 'volume' | 'ask' | 'bid' | 'fundamentals' | 'high_price' | 'low_price' | 'open_price' | 'prev_close_price' | 'rch' | 'rchp' | 'rtc' | 'rtc_time' | 'status' | 'industry' | 'basic_eps_net_income' | 'beta_1_year' | 'market_cap_basic' | 'earnings_per_share_basic_ttm' | 'price_earnings_ttm' | 'sector' | 'dividends_yield' | 'timezone' | 'country_code';
import quoteMarketConstructor = require("./market");
