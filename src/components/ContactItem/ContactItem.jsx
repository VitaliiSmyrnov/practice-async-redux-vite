import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deleteContact } from "src/redux/operations";

import { StyledButton } from "./ContactItem.styled";

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        {name}: {phone}
      </p>
      <StyledButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </StyledButton>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
