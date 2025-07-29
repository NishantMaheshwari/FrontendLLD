import React from 'react'

const ShimmerCard = ({ count }) => {
	const dummyData = Array.from({ length: count });
	return (
		<>
			{dummyData.map((ele, index) => (
				<div key={index} className='w-64 h-64 p-5 m-5 border border-black rounded-lg bg-gray-400'>
				</div>
			))}
		</>
	)
}

export default ShimmerCard;