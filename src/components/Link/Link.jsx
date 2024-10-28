
import PropTypes from 'prop-types'

const Link = ({route}) => {
    const {id,path, name} = route;
    
  return (
    <li>
        <a href={path}>{name}</a>
    </li>
    
  )
}

Link.propTypes = {
    route: PropTypes.array.isRequired
}

export default Link