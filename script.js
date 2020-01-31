class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.emil = email;
        this.phone = phone;
        this.relation = relation;

    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(name, email, phone, relation) {
        let myNewContact = new Contact(name, email, phone, relation)
        this.contacts.push(myNewContact);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
}

let myAddressBook = new AddressBook();

myAddressBook.add("Patrick O", "pomara@email.com", "5865672207", "Me");
myAddressBook.add("kitty", "kitty@email.com", "5865655585", "mother");
myAddressBook.add("kevin", "kevin@email.com", "5868731162", "father");
myAddressBook.add("billy", "billy@email.com", "8524569632", "brother");
myAddressBook.add("amber", "amber@email.com", "7894568521", "sister");
myAddressBook.add("sam", "sam@email.com", "4567891230", "sister");

// myAddressBook.deleteAt(0);
console.log(myAddressBook)

const print = function (addressBookRefference) {
    addressBookRefference.contacts.forEach(contact => {
        console.log(contact);
    });
};
print(myAddressBook);