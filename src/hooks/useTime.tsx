import { useEffect, useState } from 'react'

function useTime() {
	
	const date = new Date();
	const [hours, setHours] = useState(date.getHours());  
	const [mines, setMines] = useState(date.getMinutes());

	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			setHours(date.getHours())
			setMines(date.getMinutes())
		}, 1000)
	}, [])

	const findBinaryTime = (current: number, binaryValues: number[], type?: string) => {
		const arrBinaryItem: number[] = []

		if(current > 12 && type === 'hours'){
			current = current - 12
		}

		binaryValues.forEach((number) => {
			if(current >= number){
				arrBinaryItem.push(number)
				current -= number
			} else {
				arrBinaryItem.push(0)
			}
		})
		return arrBinaryItem
	}
	


	return {
		hours,
		mines,
		BinaryHours: findBinaryTime(hours, [8, 4, 2, 1], 'hours'),
		BinaryMines: findBinaryTime(mines, [32, 16, 8, 4, 2, 1])
	}
}

export default useTime

