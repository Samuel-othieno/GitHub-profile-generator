import "./InputForm.css";
import { FaSearch } from "react-icons/fa";
import PropTypes from 'prop-types';

function InputForm({ username, handleChange, handleSubmit }) {
    return (
        <div className="input-wrapper">
            <form onSubmit={handleSubmit} className="input-form">
                <FaSearch id="search-icon" />
                <input
                    type="text"
                    value={username}
                    onChange={handleChange}
                    placeholder="Enter your GitHub username"
                />
            </form>
        </div>
    );
}

InputForm.propTypes = {
    username: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default InputForm;
