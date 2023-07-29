import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Toaster } from "react-hot-toast";

import { fetchContacts } from "src/redux/operations";

import { ContactForm, Filter, ContactList } from "src/components";

import {
  StyledContactsBox,
  StyledContainer,
  StyledWrapper,
} from "./App.styled";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledWrapper>
      <StyledContainer>
        <h1>Phonebook</h1>
        <ContactForm />

        <StyledContactsBox>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </StyledContactsBox>
      </StyledContainer>

      <Toaster />
    </StyledWrapper>
  );
};
