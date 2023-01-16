const member = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
];

const container = document.getElementById('container');
let imgPreview = document.createElement('img');
imgPreview.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1;';

for (let i = 0; i < member.length; i++) {
    let card = document.createElement('div');
    card.classList.add('members-team');
    card.innerHTML = `<p>Name: ${member[i].name}</p>
                           <p>Role: ${member[i].role}</p>`;

    let imagePath = document.createElement('p');
    imagePath.innerHTML = `Photo: ${member[i].image}`;
    card.appendChild(imagePath);
    container.appendChild(card);

    // Creiamo un elemento 'x' per indicare all'utente dove cliccare per chiudere la visualizzazione dell'immagine
    let xIcon = document.createElement('div');
    xIcon.classList.add('xIcon');
    xIcon.innerHTML = '&times;';
    container.appendChild(xIcon);
    xIcon.addEventListener('click', function() {
        document.body.removeChild(imgPreview);
        xIcon.style.display = 'none';
      
    });

    imagePath.addEventListener('click', function(){
        imgPreview.src = `img/${member[i].image}`;
        document.body.appendChild(imgPreview);
        xIcon.style.display = 'block';
    });




}