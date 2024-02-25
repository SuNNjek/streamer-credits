import {CreditsEvent, TwitchUserEvent} from "./base";

export interface TwitchCheerEvent extends CreditsEvent, TwitchUserEvent {
    triggerCategory: "Twitch/Chat";
    triggerName: "Cheer";

    bits: number;
}

export function isCheer(event: CreditsEvent): event is TwitchCheerEvent {
    return event.triggerCategory === "Twitch/Chat" && event.triggerName === "Cheer"
}