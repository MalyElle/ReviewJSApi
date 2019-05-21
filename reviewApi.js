var ironmanDiv = document.getElementById('ironMan');

var container = document.createElement('div');

var logo = document.createElement('img');
logo.src = 'shutterstock.jpg';

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
            heading1.textContent = info.company;




            container.appendChild(card);
            
        });
    } else {
        alert('VIRUS!');
    }
}
request.send();