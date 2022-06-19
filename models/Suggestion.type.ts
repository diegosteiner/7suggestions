import { StaticImageData } from "next/image";


export enum Category {
	Learn,
	Excercise,
	Train,
	Meditate
}

export type Suggestion = {
	id: string;
	category: Category;
	style?: any;
	title: string;
	description?: string;
	timeframe?: number;
	externalLink?: string;
	image?: StaticImageData;
	// category: Category;
}
