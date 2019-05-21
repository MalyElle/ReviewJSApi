var ironmanDiv = document.getElementById('ironMan');

var backgroundColor = document.body.style.backgroundColor = "lightgray";

var container = document.createElement('div');

var logo = document.createElement('img');
logo.src = 'shutterstock.jpg';
logo.style.display = 'block'; 
logo.style.marginLeft = 'auto';
logo.style.marginRight = 'auto';
logo.style.height = '400px';
logo.style.width = '1300px';
logo.classList.add('w3-black','w3-border','w3-margin')


ironmanDiv.appendChild(container);
container.appendChild(logo);

var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

request.onload = function() {
    var data = JSON.parse(this.response);
    if(request.status >= 200 && request.status < 400) {
        data.forEach(info => {
            var card = document.createElement('div');
            var heading1 = document.createElement('h1');
            heading1.textContent = info.name;
            heading1.style.color = 'black'
            heading1.classList.add('w3-teal','w3-center','w3-margin',)
            
            var para = document.createElement('li');
            info.name = info.name.substring(0,100);
            para.textContent = `${info.username}`;
            para.style.listStyle = 'square inside url("purple")';
            para.style.fontSize = '1.3rem'

           var website = document.createElement('li');
           website.textContent = info.website;
           website.style.listStyle = 'square inside url("sqpurple.gif")';
           website.style.fontSize = '1.3rem'

           

           var mail = document.createElement('li');
           info.email = info.email.substring(0,100);
           mail.textContent =`${info.email}`;
           mail.style.listStyle = 'square inside url("sqpurple.gif")';
           mail.style.fontSize = '1.3rem'


            container.appendChild(card);
            card.appendChild(heading1);
            card.appendChild(para);
            card.appendChild(website);
            card.appendChild(mail);
            
        });
    } else {
        alert('VIRUS!');
    }
}
request.send();