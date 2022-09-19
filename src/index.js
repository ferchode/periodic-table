import { renderCard } from "./renderCard.js";

const API = 'https://neelpatel05.pythonanywhere.com'

const root = document.querySelector('.root');

const lanthanoids = document.createElement('div'); 
lanthanoids.classList.add('lant');

const gas = document.createElement('div');
gas.classList.add('gas');

const halogen = document.createElement('div'); 
halogen.classList.add('halog');

const alkali = document.createElement('div');
alkali.classList.add('alkaliM');

const earth = document.createElement('div');
earth.classList.add('earth');


const data = async () => {

    const res = await fetch(API);
    const data = await res.json();

            
    for (let i = 0; i < data.length; i++) {

    let symbol = data[i].symbol;
    let atomicNumber = data[i].atomicNumber;
    let groupBlock = data[i].groupBlock;
    let name = data[i].name;
    let atomicMass = data[i].atomicMass;
    let electronicConfiguration = data[i].electronicConfiguration;
    let group = groupBlock.replace(/ /g, '-');

    if (group != 'lanthanoid' && 
        group != 'actinoid' && 
        group != 'noble-gas' &&
        group != 'halogen' &&
        group != 'alkali-metal' &&
        group != 'alkaline-earth-metal'
        ) {
        
        const elementContainer = document.createElement('div');
        elementContainer.classList.add('element', `element${atomicNumber}`, `${group}`);
        elementContainer.addEventListener('click', (active) => { renderCard(symbol, name, atomicNumber, atomicMass, electronicConfiguration, group)})

        const number = document.createElement('p');
        number.classList.add('atomicNumber');
        number.textContent = atomicNumber;

        const symbolElem = document.createElement('p');
        symbolElem.classList.add('symbol');
        symbolElem.textContent = symbol;

        elementContainer.append(number, symbolElem);
        root.append(elementContainer);
    }

    if (group === 'lanthanoid' || group === 'actinoid') {
        

        const elementContainer = document.createElement('div');
        elementContainer.classList.add('element', `element${atomicNumber}`, `${group}`);
        elementContainer.addEventListener('click', (active) => { renderCard(symbol, name, atomicNumber, atomicMass, electronicConfiguration, group)})

        const number = document.createElement('p');
        number.classList.add('atomicNumber');
        number.textContent = atomicNumber;

        const symbolElem = document.createElement('p');
        symbolElem.classList.add('symbol');
        symbolElem.textContent = symbol;

        lanthanoids.append(elementContainer)
        elementContainer.append(number, symbolElem);
        root.append(lanthanoids);
    }

    if (group === 'noble-gas') {
        

        const elementContainer = document.createElement('div');
        elementContainer.classList.add('element', `element${atomicNumber}`, `${group}`);
        elementContainer.addEventListener('click', (active) => { renderCard(symbol, name, atomicNumber, atomicMass, electronicConfiguration, group)})

        const number = document.createElement('p');
        number.classList.add('atomicNumber');
        number.textContent = atomicNumber;

        const symbolElem = document.createElement('p');
        symbolElem.classList.add('symbol');
        symbolElem.textContent = symbol;

        gas.append(elementContainer)
        elementContainer.append(number, symbolElem);
        root.append(gas);
    }

    if (group === 'halogen') {

        const elementContainer = document.createElement('div');
        elementContainer.classList.add('element', `element${atomicNumber}`, `${group}`);
        elementContainer.addEventListener('click', (active) => { renderCard(symbol, name, atomicNumber, atomicMass, electronicConfiguration, group)})

        const number = document.createElement('p');
        number.classList.add('atomicNumber');
        number.textContent = atomicNumber;

        const symbolElem = document.createElement('p');
        symbolElem.classList.add('symbol');
        symbolElem.textContent = symbol;

        halogen.append(elementContainer)
        elementContainer.append(number, symbolElem);
        root.append(halogen);
        
    }

    if (group === 'alkali-metal') {


        const elementContainer = document.createElement('div');
        elementContainer.classList.add('element', `element${atomicNumber}`, `${group}`);
        elementContainer.addEventListener('click', (active) => { renderCard(symbol, name, atomicNumber, atomicMass, electronicConfiguration, group)})

        const number = document.createElement('p');
        number.classList.add('atomicNumber');
        number.textContent = atomicNumber;

        const symbolElem = document.createElement('p');
        symbolElem.classList.add('symbol');
        symbolElem.textContent = symbol;

        alkali.append(elementContainer)
        elementContainer.append(number, symbolElem);
        root.append(alkali);
    }


    if (group === 'alkaline-earth-metal') {


        const elementContainer = document.createElement('div');
        elementContainer.classList.add('element', `element${atomicNumber}`, `${group}`);
        elementContainer.addEventListener('click', (active) => { renderCard(symbol, name, atomicNumber, atomicMass, electronicConfiguration, group)})

        const number = document.createElement('p');
        number.classList.add('atomicNumber');
        number.textContent = atomicNumber;

        const symbolElem = document.createElement('p');
        symbolElem.classList.add('symbol');
        symbolElem.textContent = symbol;

        earth.append(elementContainer)
        elementContainer.append(number, symbolElem);
        root.append(earth);
    }

    }
    
    }

data()