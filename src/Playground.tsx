import React, { useState } from 'react'

// Interface a way to map object properties with types
interface HeaderProps {
	buttonText: string;
	age: number; // number can be either integer or double
	alive?: boolean; // ? Optional
}

interface Person {
	firstname: string;
	lastname: string;
}

interface Mammal {
	species: Person;
	fn?: (genus: string) => string; // Optional function that takes in a string param and returns a string
}

interface TextNode {
	text: string;
}

export default function Header({buttonText, age}: HeaderProps){
	// const [count, setCount] = useState(5) // By Default Type Inferred

	const [count, setCount] = useState<number | null>(5) 
	// setCount(false) Throws Type Error

	const [text, setText] = useState<TextNode>({text: 'DeadPool'})
	// setText(3) Throws Type Error

	return (
		<div>
			<h1>{age}</h1>
			<button>{buttonText}</button>
		</div>
	)
}


