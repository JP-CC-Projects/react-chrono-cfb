/// <reference types="react" />
import { Theme } from '@models/Theme';
import { TimelineProps } from '@models/TimelineModel';
type ContentT = Pick<TimelineProps, 'theme' | 'slideShow' | 'mode' | 'borderLessCards'>;
export declare const TimelineItemContentWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, {
    $active?: boolean;
    $borderLessCards?: TimelineProps['borderLessCards'];
    $branchDir?: string;
    $isNested?: boolean;
    $maxWidth?: number;
    $minHeight?: number;
    $noMedia?: boolean;
    $slideShow?: TimelineProps['slideShow'];
    $slideShowActive?: boolean;
    $slideShowType?: TimelineProps['slideShowType'];
    $textOverlay?: boolean;
} & ContentT>>;
export declare const TimelineCardHeader: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>, never>>;
export declare const CardSubTitle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {
    $fontSize?: string;
    $padding?: boolean;
    dir?: string;
    theme?: Theme;
}>>;
export declare const CardTitle: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {
    $fontSize: string;
    $padding?: boolean;
    dir?: string;
    theme: Theme;
}>>;
export declare const CardTitleAnchor: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<import("react").DetailedHTMLProps<import("react").AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, never>>;
export declare const TimelineContentDetails: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {
    theme?: Theme;
}>>;
export declare const TimelineSubContent: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    fontSize?: string;
    theme?: Theme;
}>>;
export declare const TimelineContentDetailsWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $borderLess?: boolean;
    $cardHeight?: number | null;
    $contentHeight?: number;
    $customContent?: boolean;
    $gradientColor?: string | null;
    $showMore?: boolean;
    $textOverlay?: boolean;
    $useReadMore?: boolean;
    branchDir?: string;
    height?: number;
    theme?: Theme;
}>>;
export declare const ShowMore: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    show?: 'true' | 'false';
    theme?: Theme;
}>>;
export declare const SlideShowProgressBar: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $color?: string;
    $duration?: number;
    $paused?: boolean;
    $resuming?: boolean;
    $startWidth?: number;
}>>;
export declare const ChevronIconWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    collapsed?: 'true' | 'false';
}>>;
export declare const TriangleIconWrapper: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    dir?: string;
    offset?: number;
    theme?: Theme;
}>>;
export {};
