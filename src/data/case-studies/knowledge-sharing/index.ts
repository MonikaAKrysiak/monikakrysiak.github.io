import type { ImageMetadata } from "astro";
import { createCaseStudyGetter } from "..";

import { knowledgeSharing as en } from "./en";
import { knowledgeSharing as pl } from "./pl";

export interface KnowledgeSharingEvidenceLink {
    label: string;
    href: string;
}

export interface KnowledgeSharingEvidenceItem {
    title: string;
    description: string;
    image?: ImageMetadata;
    alt?: string;
    secondaryImage?: ImageMetadata;
    secondaryImageAlt?: string;
    videoSrc?: string;
    links?: KnowledgeSharingEvidenceLink[];
    linksAfterDescription?: boolean;
    secondaryImageLarge?: boolean;
    layout?: "default" | "academic" | "learning-resource";
}

export interface KnowledgeSharingPracticalExample {
    title: string;
    context: string;
    approach: string;
    outcome: string;
    meta: {
        label: string;
        value: string;
    }[];
    previewImage?: ImageMetadata;
    previewAlt?: string;
    previewDescription?: string;
    evidence?: KnowledgeSharingEvidenceItem[];
    evidenceLabel?: string;
    evidenceCollapseLabel?: string;
    resourceLink?: {
        label: string;
        href: string;
    };
}
export const getKnowledgeSharing = createCaseStudyGetter(en, pl);