import {CreditsEvent, TwitchUserEvent} from "./base";

export interface TwitchRaidEvent extends CreditsEvent, TwitchUserEvent {
    triggerCategory: "Twitch/Raid";
    triggerName: "Raid";

    viewers: number;
}

export function isRaid(event: CreditsEvent): event is TwitchRaidEvent {
    return event.triggerCategory === "Twitch/Raid" && event.triggerName === "Raid"
}