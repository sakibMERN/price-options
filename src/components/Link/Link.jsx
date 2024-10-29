
import PropTypes from 'prop-types'

const Link = ({route}) => {
    const {path, name} = route;
    
  return (
    <li className='hover:bg-slate-500 hover:text-white px-5 py-1 rounded-md'>
        <a href={path}>{name}</a>
    </li>
    
  )
}

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link