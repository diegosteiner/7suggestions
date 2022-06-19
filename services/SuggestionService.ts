import { Category, Suggestion } from "../models/Suggestion.type";
import { v4 as uuid } from 'uuid';
import readImage from '../public/images/read.jpg'

export const allSuggestions: Suggestion[] = [
  {
    id: uuid(),
		category: Category.Learn,
    title: "Read an Article on Pocket",
    image: readImage,
		externalLink: "https://getpocket.com/de/my-list"
  },
  {
    id: uuid(),
		category: Category.Learn,
    title: "Watch a video from your Watch list",
    description: "Lorem ipsum",
		externalLink: "https://www.youtube.com/playlist?list=WL"
  }, 
  {
    id: uuid(),
		category: Category.Meditate,
    title: "Continue an audiobook",
		externalLink: "https://www.audible.de/library/titles"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Do Neck stretch",
		externalLink: "https://www.autonomous.ai/ourblog/15-simple-home-office-exercises"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Do shoulder stretch",
		externalLink: "https://www.autonomous.ai/ourblog/15-simple-home-office-exercises"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Do 10 Chair Squats",
		externalLink: "https://www.autonomous.ai/ourblog/15-simple-home-office-exercises"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Do 10 Desk Desk Push-Ups",
		externalLink: "https://www.autonomous.ai/ourblog/15-simple-home-office-exercises"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Do 10 Desk Calf Raises",
		externalLink: "https://www.autonomous.ai/ourblog/15-simple-home-office-exercises"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Do 10 Lunges",
		externalLink: "https://www.autonomous.ai/ourblog/15-simple-home-office-exercises"
  }, 
  {
    id: uuid(),
		category: Category.Excercise,
    title: "Go for a walk",
  }, 
  {
    id: uuid(),
		category: Category.Meditate,
    title: "Meditate for 5 minutes",
  }, 
  {
    id: uuid(),
		category: Category.Meditate,
    title: "Be thankful",
  }, 
]

export function randomSuggestions(n: number = 7): Suggestion[] {
  console.count("random")

	return allSuggestions.sort(() => 0.5 - Math.random()).slice(0,n)
}
