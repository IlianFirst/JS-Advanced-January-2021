function addItem() {
    const liElement = document.createElement('li');
    liElement.textContext = document.getElementById('newItemText').value;
    document.getElementById('items').appendChild(liElement);
    document.getElementById('newItemText').value = '';
}