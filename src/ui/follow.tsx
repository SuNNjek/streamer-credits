import {FC} from "react";
import {TwitchFollowEvent} from "../client/events";

export interface FollowProps {
    event: TwitchFollowEvent;
}

export const Follow: FC<FollowProps> = ({ event }) => (
    <div>
        { event.user } followed
    </div>
)