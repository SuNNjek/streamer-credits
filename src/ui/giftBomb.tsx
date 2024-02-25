import {TwitchGiftBombEvent} from "../client/events";
import {FC} from "react";

export interface GiftBombProps {
    event: TwitchGiftBombEvent;
}

export const GiftBomb: FC<GiftBombProps> = ({ event }) => (
    <div>
        { event.user } gifted { event.gifts } { event.tier } subs!
    </div>
)
