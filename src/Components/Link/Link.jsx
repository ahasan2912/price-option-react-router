import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className="mr-6 hover:bg-yellow-300 px-6 py-2">
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes = {
route: PropTypes.object.isRequired
}
export default Link;