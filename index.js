window.addEventListener('load', () => {
    const contacts = document.getElementById("contacts");
    const buttonContacts = document.getElementById("button__contacts")
    const button = document.getElementById("btn-top");

    //function for button "onTop"
    button.addEventListener('click', onTop);

    function onTop() {
        document.documentElement.scrollTop = 0;
    }

    //function for mobile menu with contacts
    buttonContacts.addEventListener('click', showContacts);

    function showContacts() {
        contacts.classList.toggle("contacts__container_show");
    }
});

