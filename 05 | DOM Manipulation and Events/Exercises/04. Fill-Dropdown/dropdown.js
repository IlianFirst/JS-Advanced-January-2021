function addItem() {
    let nameItem = document.getElementById('newItemText').value;
    let valueItem = document.getElementById('newItemValue').value;

    let el = document.createElement('option');
    el.textContent = nameItem;
    el.value = valueItem;

    document.getElementById('menu').appendChild(el);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}