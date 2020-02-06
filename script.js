class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor() {
        this.contacts = [];
    }
    add(name, email, phone, relation) {
        let myNewContact = new Contact(name, email, phone, relation);
        this.contacts.push(myNewContact);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    searchContact(text) {
        return this.contacts.filter(contact => {
            for (let property in contact) {
                if (contact[property].includes(text)) {
                    return contact;
                }
            }
        });
    }
}

let myAddressBook = new AddressBook();

myAddressBook.add("Patrick O", "pomara@email.com", "5865672207", "Me");
myAddressBook.add("kitty", "kitty@email.com", "5865655585", "mother");
myAddressBook.add("kevin", "kevin@email.com", "5868731162", "father");
myAddressBook.add("billy", "billy@email.com", "8524569632", "brother");
myAddressBook.add("amber", "amber@email.com", "7894568521", "sister");
myAddressBook.add("sam", "sam@email.com", "4567891230", "sister");

// myAddressBook.deleteAt(2);
console.log(myAddressBook);

const print = function (addressBookRefference) {
    addressBookRefference.contacts.forEach(contact => {
        console.log(contact);
    });
};
// print(myAddressBook);

function display() {
    let counter = 0;
    let container = document.querySelector(".contact-list");
    container.innerHTML = "";
    for (let contact of myaddressBook.contacts) {
        let card = document.createElement("div");
        let name = document.createElement("p");
        name.innerText = `Name: ${contact.name}`;
        let email = document.createElement("p");
        email.innerText = `Email: ${contact.email}`;
        let phone = document.createElement("p");
        phone.innerText = `Phone: ${contact.phone}`;
        let relation = document.createElement("p");
        relation.innerText = `Relation: ${contact.relation}`;
        let icon = document.createElement("i");
        icon.classList.add("fas", "fa-trash");
        icon.setAttribute("index-number", `${counter}`);
        card.append(name, email, phone, relation, icon);
        counter++;
        container.append(card);
        card.setAttribute("class", "contact-card");
    }
}
display();

let form = document.querySelector("form");

form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(form);
    addressBook.add(
        formData.get("name"),
        formData.get("email"),
        formData.get("phone"),
        formData.get("realation")
    );
    display();
});

let cardsContainer = document.querySelector(".contact-container");
cardsContainer.addEventListener("click", deleted);

function deleted(e) {
    if (e.target.className === "fas fa-trash") {
        let trashIndex = e.target.getAttribute("index-number");
        addressBook.deleteAt(trashIndex);
        display();
    }
}