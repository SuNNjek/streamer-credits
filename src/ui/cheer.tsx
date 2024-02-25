import {TwitchCheerEvent} from "../client/events";
import {FC} from "react";

export interface CheerProps {
    event: TwitchCheerEvent;
}

export const Cheer: FC<CheerProps> = ({ event }) => (
    <div>
        { event.user } cheered with { event.bits } bits
    </div>
)