import { GoIssueClosed } from "react-icons/go";
import PropTypes from 'prop-types'

const Feature = ({feature}) => {
  return (
    <div>
        <p className="flex items-center gap-3"><GoIssueClosed className="bg-white text-slate-700 rounded-full" /> {feature}</p>
    </div>
  )
}

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature