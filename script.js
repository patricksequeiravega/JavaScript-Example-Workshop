const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit harum ipsam, recusandae labore quidem veritatis accusantium id hic totam quaerat rem voluptatem quos eos possimus eius in cupiditate eveniet.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = () => {
    const listItem = document.createElement('li');
    const listContent = prompt('Favorite Color?');
    listItem.textContent = listContent;
    list.appendChild(listItem);


    listItem.onclick = function(event) {
        event.stopPropagation();
        const listContent = prompt('Change your color');
        this.textContent = listContent;
    };
}