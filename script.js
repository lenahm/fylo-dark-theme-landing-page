const formEarlyAccess = document.getElementById('early-access-form');
const inputEarlyAccess = document.getElementById('input-early-access'); 

formEarlyAccess.addEventListener('submit', e => {
    e.preventDefault(); 

    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (regex.test(inputEarlyAccess.value.trim())) {
        showAlert('Email address submitted', 'success');
        inputEarlyAccess.value = '';
    } else {
        showAlert('Please enter a valid email address', 'error'); 
    }
})

function showAlert(message, classname) {
    // clear any remaining alert 
    this.clearAlert(); 

    // create div 
    const div = document.createElement('div'); 
    div.className = `alert ${classname}`; 
    div.appendChild(document.createTextNode(message));

    // get parent- and insert-before-element
    const parent = document.getElementById('early-access'); 
    const insertBeforeElement = document.getElementById('error-message-field'); 

    // insert alert with timeout after 4 seconds 
    parent.insertBefore(div, insertBeforeElement); 
    setTimeout(() => {
        this.clearAlert(); 
    }, 4000); 
}

function clearAlert() {
    const currentAlert = document.querySelector('.alert'); 
    if (currentAlert) {
        currentAlert.remove(); 
    }
}