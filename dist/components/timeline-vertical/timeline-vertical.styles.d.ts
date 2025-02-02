/// <reference types="react" />
import { Theme } from '@models/Theme';
import { TimelineMode } from '@models/TimelineModel';
export declare const TimelineVerticalWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>>;
export declare const VerticalItemWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $alternateCards?: boolean;
    $cardHeight?: number;
    $cardLess?: boolean;
    $isNested?: boolean;
    theme?: Theme;
}>>;
export declare const TimelineCardContentWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $alternateCards?: boolean;
    $cardLess?: boolean;
    $flip?: boolean;
    $noTitle?: boolean;
    height?: number;
}>>;
export declare const TimelineTitleWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $alternateCards?: boolean;
    $flip?: boolean;
    $hide?: boolean;
    mode?: TimelineMode;
}>>;
