import {TwitchRaidEvent} from "../client/events";
import {FC} from "react";

export interface RaidProps {
    event: TwitchRaidEvent
}

export const Raid: FC<RaidProps> = ({ event }) => (
    <div>
        { event.user } raided with { event.viewers } viewers
    </div>
)