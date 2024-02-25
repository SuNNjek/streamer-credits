import {CreditsEvent, TwitchUserEvent} from "./base";

export interface TwitchFollowEvent extends CreditsEvent, TwitchUserEvent {
    triggerCategory: "Twitch/Channel";
    triggerName: "Follow";
}

export function isFollowEvent(event: CreditsEvent): event is TwitchFollowEvent {
    return event.triggerCategory === "Twitch/Channel" && event.triggerName === "Follow";
}