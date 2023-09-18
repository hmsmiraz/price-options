import PropTypes from 'prop-types'; 

const Link = ({ route }) => {

  return (
    <li className="mr-3 text-xl font-serif px-6 py-1 hover:bg-gray-400 md:p-4">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
    route: PropTypes.object,
};

export default Link;
