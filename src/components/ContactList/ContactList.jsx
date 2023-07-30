import { useSelector } from "react-redux";

import { ContactItem } from "src/components";

import { selectVisibleContacts } from "src/redux/selectors";

import { StyledItem, StyledList } from "./ContactList.styled";

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

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
