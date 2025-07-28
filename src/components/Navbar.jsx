import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='flex justify-center gap-3'>
			<Link
				to="/shimmer"
				className="px-4 py-2 text-white rounded"
			>
				Shimmer
			</Link>
			<Link
				to="/scroll"
				className="px-4 py-2 text-white rounded"
			>
				Infinite Scroll
			</Link>
		</div>
	)
}

export default Navbar