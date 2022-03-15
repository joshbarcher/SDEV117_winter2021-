//register a key event handler when the page loads
window.onload = function() {
    let input = document.querySelector("input");
    input.onkeypress = function(event) {
        //stop the default behavior (enter the key typed into the box)
        event.preventDefault();

        //get our key
        let key = event.key;

        let badChars = "`~!@#$%^&*()_-+=[]{};':\"\|,./<>?01234567890";

        //stop if we have a bad character
        if (badChars.includes(key))
        {
            return; //exit
        }

        //change to lowercase
        key = key.toLowerCase();

        //manually enter the key into the textbox
        input.value += key;
    };
};