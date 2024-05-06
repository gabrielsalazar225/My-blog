const username = document.getElementById('usernameEl')
const title = document.getElementById ('titleEl')
const comments = document.getElementById('CommentsEl')
const submmitevent = document.getElementById('submit')
const modeToggle = document.getElementById('mode-toggle');
const container = document.querySelector('.container');


// I am creating the string of the data that i will save after the event
function saveLastBlog () {
    const blogInfo = {
        username : username.value.trim(),
        title : title.value.trim(),
        comments : comments.value.trim ()
    }

// I am converting the variable on a string to make possible to storage 
    localStorage.setitem ('bloginfo', JSON.stringify(tempblogInfo))
}

submmit.addEventListener('click', function (event){
    event.preventDefault();
})

function localStorage () {
    const storedData= JSON.parse(localStorage.getItem('bloginfo'));
    tempblogInfo = storedData
}

modeToggle.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
});


