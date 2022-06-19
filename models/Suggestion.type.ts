import { StaticImageData } from "next/image";
import { CSSProperties, ReactElement } from "react";


export enum Category {
	Learn,
	Excercise,
	Train,
	Meditate
}

export type Suggestion = {
	id: string;
	category: Category;
	buttonStyle?: CSSProperties;
	title: string;
	description?: string;
	timeframe?: number;
	externalLink?: string;
	background?: StaticImageData | string;
	children?: ReactElement
}
