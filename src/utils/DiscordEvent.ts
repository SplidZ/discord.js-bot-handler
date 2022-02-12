"use strict";

import type Client from "../../main";

abstract class DiscordEvent {
    client: typeof Client;
    name: string;

    constructor(client: typeof Client, name: string) {
        if (this.constructor === DiscordEvent) throw new Error("Event class is an abstract class");
        this.client = client;
        this.name = name;
    }

    abstract run(...args: any[]): void;

}

export default DiscordEvent;