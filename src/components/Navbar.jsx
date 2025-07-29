import { Link } from 'react-router-dom'
import { pages } from '../data/pages.jsx'

const Navbar = () => {
	return (
		<div className='flex justify-center gap-3'>

			{pages.map((page) => (
			<Link
				to={page.path}
				key={page.name}
				className="px-4 py-2 text-white rounded">
					{page.name}
			</Link>
			))}
		</div>
	)
}

export default Navbar