const button = document.querySelector('button')!;

function clickHandler(message: string) {
    console.log('Clicked' + message);
}

function add(n1: number, n2: number) {
    if ( n1 + n2  > 0)
    {
        return n1 + n2;
    }
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null, "you're welcome!"));
}