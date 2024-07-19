function runTypingEffect() {
    const text = 'I am Lucas<br>Nepomuceno.';
    const typingElement = document.getElementById('typing-text');
    const typingDelay = 100;

    typeText(text, typingElement, typingDelay)
}

function typeText(text, element, delay) {
    let i = 0;
    function typeCharacter() {
        if (i < text.length) {
            if (text[i] === '<') {
                let tag = '';
                while (i < text.length && text[i] !== '>') {
                    tag += text[i];
                    i++;
                }
                tag += '>'; // Add the closing '>'
                element.innerHTML += tag;
                i++; // Move past the '>'
            } else {
                element.innerHTML += text[i];
                i++;
            }
            setTimeout(typeCharacter, delay);
        }
    }
    typeCharacter();
}

document.addEventListener('DOMContentLoaded', runTypingEffect);