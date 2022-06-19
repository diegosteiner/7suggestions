import { Category, Suggestion } from "../models/Suggestion.type";
import { v4 as uuid } from 'uuid';
import readImage from '../public/images/read.jpg'
import youtubeImage from '../public/images/youtube.jpg'
import audibleImage from '../public/images/audible.jpg'
import stretchImage from '../public/images/stretch.jpg'
import walkImage from '../public/images/walk.jpg'
import meditateImage from '../public/images/meditate.jpg'
import sportImage from '../public/images/sport.jpg'

export const allSuggestions: Suggestion[] = [
  {
    id: uuid(),
		category: Category.Learn,
    title: "Read an Article on Pocket",
    background: readImage,
		externalLink: "https://getpocket.com/de/my-list"
  },
  {
    id: uuid(),
		category: Category.Learn,
    title: "Watch a video from your Watch list",
    background: youtubeImage,
		externalLink: "https://www.youtube.com/playlist?list=WL"
  }, 
  {
    id: uuid(),
		category: Category.Meditate,
    title: "Continue an audiobook",
    background: audibleImage,
		externalLink: "https://www.audible.de/library/titles"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Do Neck stretch",
    background: stretchImage,
		externalLink: "https://www.autonomous.ai/ourblog/15-simple-home-office-exercises"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Do shoulder stretch",
    background: stretchImage,
		externalLink: "https://www.autonomous.ai/ourblog/15-simple-home-office-exercises"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Do 10 Chair Squats",
    background: sportImage,
		externalLink: "https://www.autonomous.ai/ourblog/15-simple-home-office-exercises"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Do 10 Desk Desk Push-Ups",
    background: sportImage,
		externalLink: "https://www.autonomous.ai/ourblog/15-simple-home-office-exercises"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Do 10 Desk Calf Raises",
    background: sportImage,
		externalLink: "https://www.autonomous.ai/ourblog/15-simple-home-office-exercises"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Do 10 Lunges",
    background: sportImage,
		externalLink: "https://www.autonomous.ai/ourblog/15-simple-home-office-exercises"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Go for a walk",
    background: walkImage,
  }, 
  {
    id: uuid(),
		category: Category.Meditate,
    title: "Meditate for 5 minutes",
    background: meditateImage,
  }, 
  {
    id: uuid(),
		category: Category.Meditate,
    title: "Be thankful",
    background: meditateImage,
  }, 
]

export function randomSuggestions(n: number = 7): Suggestion[] {
  console.count("random")

	return allSuggestions.sort(() => 0.5 - Math.random()).slice(0,n)
}
