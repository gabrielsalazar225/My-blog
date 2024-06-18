const themeswitcher = document.querySelector('#theme-switcher')
let container = document.querySelector('.container');
let mode = 'light'

function displayBlogPosts () {
    const blogPost = document.getElementById('blogPost');

    const blogList = JSON.parse(localStorage.getItem('blogList'));

    blogList.forEach(element => {
        const child = document.createElement('div')
        const title = document.createElement('h2')
        const userName = document.createElement('h3')
        const content = document.createElement('p')

        child.style.border=
        '3px solid rgb(3, 50, 3)'
        child.style.padding=
        '10px'
        child.style.marginTop=
        '10px'


        title.innerHTML = element.title
        userName.innerHTML = element.userName
        content.innerHTML = element.content

        child.appendChild(title)
        child.appendChild(userName)
        child.appendChild(content)

        blogPost.appendChild(child)
    }); 

    }
    displayBlogPosts();

    themeswitcher.addEventListener('click', function() {
    if (mode === 'light') {
        mode = 'dark';
    container.setAttribute('class', 'light');    
    } else {
        mode = 'ligh';
    container.setAttribute('class', 'dark');
    } 
    });


    