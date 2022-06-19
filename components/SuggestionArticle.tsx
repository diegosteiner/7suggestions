import { Category, Suggestion } from "../models/Suggestion.type"
import Image from 'next/image'

interface SuggestionArticleProps {
	suggestion: Suggestion;
	index: number;
	onEngage: (suggestion: Suggestion) => void;
}

const categoryColors: Record<Category, string> = {
	[Category.Learn]: 'green',
	[Category.Meditate]: 'blue',
	[Category.Excercise]: 'red'
}

export default function SuggestionArticle({ suggestion, onEngage }: SuggestionArticleProps) {
	const { title, description, image, category } = suggestion;
	const color = categoryColors[category] || 'gray'

	return (
		<article className='bg-red-100 snap-start relative h-screen overflow-hidden'>
			<div className="flex flex-col max-w-md mx-auto p-3 h-full justify-center z-20 relative">
				<h1 className="font-bold leading-tight text-3xl mt-0 mb-2">{title}</h1>
				<p>{description}</p>
				<button className="bg-red-500 hover:bg-red-700 text-xl mt-10 text-white font-bold py-2 px-4 rounded" onClick={() => onEngage(suggestion)}>Engage!</button>
			</div>
			<div className="absolute top-0 h-full w-full object-cover z-10 opacity-50">
				{image && <Image alt={title} src={image} ></Image>}
			</div>
		</article>)

}
