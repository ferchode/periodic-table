const root = document.querySelector('.root');


function renderCard(symbol, name, atomicNumber, atomicMass, electronicConfiguration, group){

    const elementCardScreen = document.createElement('article');
    elementCardScreen.classList.add('element-card');
    elementCardScreen.addEventListener('click', ()=>{elementCardScreen.remove()})
    

    const iconCloseCont = document.createElement('div');
    iconCloseCont.classList.add('icon-close-cont')
    iconCloseCont.addEventListener('click', ()=>{elementCardScreen.remove()})


    const iconClose = document.createElement('img');
    iconClose.setAttribute('id', 'icon-close');
    iconClose.setAttribute('alt', 'icon close');
    iconClose.src = './src/icons/close.png';


    const openCardContainer = document.createElement('div');
    openCardContainer.classList.add('open-card-container', `${group}`);

    // -------------------------------------------------------

    const leftSideCard = document.createElement('div');
    leftSideCard.classList.add('left-side');

    const leftSideTitle = document.createElement('p');
    leftSideTitle.classList.add('left-side-title');
    leftSideTitle.textContent = 'Symbol';

    const leftSideSymbol = document.createElement('p');
    leftSideSymbol.classList.add('left-side-symbol');
    leftSideSymbol.textContent = `${symbol}`;

    // --------------------------------------------------- 
    const rightSideCard = document.createElement('div');
    rightSideCard.classList.add('right-side');


    const nameContainer = document.createElement('div');
    nameContainer.classList.add('name-container');

    const nameTitle = document.createElement('p');
    nameTitle.classList.add('card-titles');
    nameTitle.textContent = 'Name:';

    const setName = document.createElement('p');
    setName.classList.add('card-specifications');
    setName.textContent = `${name}`;

    const atomicNumberContainer = document.createElement('div');
    atomicNumberContainer.classList.add('atomic-number-container');

    const atomicNumberTitle = document.createElement('p');
    atomicNumberTitle.classList.add('card-titles');
    atomicNumberTitle.textContent = 'Atomic Number:';

    const setAtomicNumber = document.createElement('p');
    setAtomicNumber.classList.add('card-specifications');
    setAtomicNumber.textContent = `${atomicNumber}`;

    const atomicMassContainer = document.createElement('div');
    atomicMassContainer.classList.add('atomic-mass-container');

    const atomicMassTitle = document.createElement('p');
    atomicMassTitle.classList.add('card-titles');
    atomicMassTitle.textContent = 'Atomic Mass:';

    const setAtomicMass = document.createElement('p');
    setAtomicMass.classList.add('card-specifications');
    setAtomicMass.textContent = `${atomicMass}`;

    const electronicConfigurationContainer = document.createElement('div');
    electronicConfigurationContainer.classList.add('electronic-configuration-container');

    const electronicConfigurationTitle = document.createElement('p');
    electronicConfigurationTitle.classList.add('card-titles');
    electronicConfigurationTitle.textContent = 'Electronic configuration:';

    const setElectronicConfiguration = document.createElement('p');
    setElectronicConfiguration.classList.add('card-specifications');
    setElectronicConfiguration.textContent = `${electronicConfiguration}`;

    //Append elements

    root.append(elementCardScreen);
    elementCardScreen.append(iconCloseCont, openCardContainer);
    iconCloseCont.append(iconClose);
    openCardContainer.append(leftSideCard, rightSideCard);
    leftSideCard.append(leftSideTitle, leftSideSymbol);
    rightSideCard.append(nameContainer, atomicNumberContainer, atomicMassContainer, electronicConfigurationContainer);
    nameContainer.append(nameTitle, setName);
    atomicNumberContainer.append(atomicNumberTitle, setAtomicNumber);
    atomicMassContainer.append(atomicMassTitle, setAtomicMass);
    electronicConfigurationContainer.append(electronicConfigurationTitle, setElectronicConfiguration);

}

export {renderCard} ;