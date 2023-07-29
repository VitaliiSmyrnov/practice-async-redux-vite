import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ContactItem } from "src/components";
import { selectVisibleContacts } from "src/redux/selectors";
import { fetchContacts } from "src/redux/operations";

import { StyledItem, StyledList } from "./ContactList.styled";

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledList>
      {visibleContacts.map((contact) => (
        <StyledItem key={contact.id}>
          <ContactItem contact={contact} />
        </StyledItem>
      ))}
    </StyledList>
  );
};
