import React from 'react'

const Card = ({ meme: {author, title, url} }) => {
	return (
		<div className='w-64 h-64 p-5 m-5 border border-black rounded-lg'>
			<img alt='author' src={url} className="w-full h-full object-cover" ></img>
			<p>{author}</p>
		</div>
	)
}

export default Card