const screen = document.getElementsByClassName("screen")[0];
const buttons = Array.from(document.getElementsByClassName("button-icon"));

const calcOperations = (target) => {
    switch (target) {
        case 'C':
            screen.innerText = '';
            break;
        case '⬅️':
            if (screen.innerText) {
                screen.innerText = screen.innerText.slice(0, -1)
            }
            break;
        case '=':
            try {
                screen.innerText = eval(screen.innerText);
            }
            catch {
                screen.innerText = "Invalid Operation!";
                setTimeout(() => {
                screen.innerText = '';
            }, 2000);
            }
            break;
        default:
            screen.innerText += target;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        calcOperations(e.target.innerText);
    });
})

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'C':
            screen.innerText = '';
            break;
        case 'c':
            screen.innerText = '';
            break;
        case 'left arrow':
            if (screen.innerText) {
                screen.innerText = screen.innerText.slice(0, -1)
            }
            break;
        case '=':
            try {
                screen.innerText = eval(screen.innerText);
            }
            catch {
                screen.innerText = "Invalid Operation!";
                setTimeout(() => {
                screen.innerText = '';
            }, 2000);
            }
            break;
        default:
            if(!isNaN(parseFloat(e.key)))
                screen.innerText += e.key;
            else {
                if (e.key == '+' || e.key == '/' || e.key == '*' || e.key == '-')
                    screen.innerText += e.key;
            }
    }
})
