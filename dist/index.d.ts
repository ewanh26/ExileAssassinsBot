import * as D from "discord.js";
export declare const prefix = "//";
export declare const APIKEY: string | undefined;
export interface CMD {
    name: string;
    exec: Function;
    usage: string;
}
export declare const get: (url: string, headers: object) => Promise<any>;
export declare let commands: D.Collection<string, CMD>;
