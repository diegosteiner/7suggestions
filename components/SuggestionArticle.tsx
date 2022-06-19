import { Suggestion } from "../models/Suggestion.type"
import Image, { StaticImageData } from 'next/image'

interface SuggestionArticleProps {
	suggestion: Suggestion;
	index: number;
	onEngage: (suggestion: Suggestion) => void;
}

function Background({ background }: { background: Suggestion['background'] }) {
	if (!background) return null;

	if (typeof background === 'string') {
		return <div style={{ background: background }}></div>
	}

	return <Image alt='Background' src={background as StaticImageData} ></Image>
}

export default function SuggestionArticle({ suggestion, onEngage, index }: SuggestionArticleProps) {
	const { title, description, background, buttonStyle, children } = suggestion;

	return (
		<article className='suggestion-article snap-start relative h-screen overflow-hidden bg-black text-white'>
			<div className="flex flex-col max-w-md mx-auto p-3 h-full justify-center z-20 relative text-center">
				<small>Suggestion {index + 1} / 7</small>
				<h1 className="font-bold leading-tight text-4xl mt-5 mb-5">{title}</h1>
				<p>{description}</p>
				{children}
				<button className="bg-red-600 hover:bg-red-500 shadow text-xl mt-10 text-white font-bold py-2 px-4 rounded" style={buttonStyle} onClick={() => onEngage(suggestion)}>Engage!</button>
			</div>
			<div className="absolute top-0 h-full w-full object-cover z-10 opacity-40">
				<Background background={background}></Background>
			</div>
		</article>)

}
