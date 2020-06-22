import React from 'react'

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


export default function Header({buttonText, age}: HeaderProps){

	return(
		<div>
			<h1>{age}</h1>
			<button>{buttonText}</button>
		</div>
	)
}

