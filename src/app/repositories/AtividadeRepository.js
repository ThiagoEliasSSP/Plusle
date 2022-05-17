
class AtividadeRepository {
    findAll() {
      return new Promise((resolve) => resolve(contacts));
    }
  
    findById(id) {
      return new Promise((resolve) => resolve(
        contacts.find((contact) => contact.id === id),
      ));
    }
  
    findByEmail(email) {
      return new Promise((resolve) => resolve(
        contacts.find((contact) => contact.email === email),
      ));
    }
  
    delete(id) {
      return new Promise((resolve) => {
        contacts = contacts.filter((contact) => contact.id !== id);
        resolve();
      });
    }
  
    create({ name, email, phone, category_id }) {
      return new Promise((resolve) => {
        const newContact = {
          id: v4(),
          name,
          email,
          phone,
          category_id,
        };
  
        contacts.push(newContact);
        resolve(newContact);
      });
    }
  
    update(id, { name, email, phone, category_id }) {
      return new Promise((resolve) => {
        const updatedContact = {
          id,
          name,
          email,
          phone,
          category_id,
        };
  
        contacts = contacts.map((contact) => {
          return contact.id === id ? updatedContact : contact
        });
  
        resolve(updatedContact);
      });
    }
  }
  
  module.exports = new AtividadeRepository();
  