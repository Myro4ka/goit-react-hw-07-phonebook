export const contactsCheking = (contact, data) => {
  if (contact.name === data.name) {
    alert(`${data.name} is already in contacts.`);
    return contact;
  } else if (contact.number === data.number) {
    alert(
      `This number (${data.number}) is already in ${contact.name} contact.`
    );
    return contact;
  }
};
