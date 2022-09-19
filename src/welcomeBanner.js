const localStorageUser = localStorage.getItem('LS_1'); 
const root = document.querySelector('body')
  
function alert (){

  if (!localStorageUser) { 

    localStorage.setItem('LS_1', JSON.stringify([])); 

    const backgroundAlert = document.createElement('div');
    backgroundAlert.classList.add('back-alert');

    const firstAlert = document.createElement('div');
    firstAlert.classList.add('alert-cont');

    const text = document.createElement('p');
    text.classList.add('text-alert')
    text.textContent = `Hey! Here you can interact with the periodic table of the elements and know some things about them!
    Press any key to close this message.
    `;

    backgroundAlert.append(firstAlert);
    firstAlert.append(text);
    root.append(backgroundAlert);

    document.addEventListener('keyup', ()=>{

        backgroundAlert.remove()
      })
  }

  
} 

alert();

