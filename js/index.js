let universe = window.prompt('Escolha um destes dois universos: DC ou Marvel.').trim().toLowerCase();
let hero = window.prompt('Escolha um herói do universo escolhido anteriormente:').trim().toLowerCase();
let qtdHero = Number(window.prompt('Digite a quantidade de vezes em que o herói escolhido deve aparecer em sua tela:').trim());
let selectedHeroText = document.getElementById('selectedHeroText');
let heroesContainer = document.getElementById('heroes');
let isValidHero = false;
let heroesByQtdHero = '';
switch (universe) {
    case 'marvel':
        switch (hero) {
            case 'thor':
                isValidHero = true;
                break;
            case 'hulk':
                isValidHero = true;
                break;
            default:
                selectedHeroText.innerHTML = '<p>Você escolheu um herói inválido da Marvel';
                break;
        }
        break;
    case 'dc':
        switch (hero) {
            case 'batman':
                isValidHero = true;
                break;
            case 'superman':
                isValidHero = true;
                break;
            default:
                selectedHeroText.innerHTML = '<p>Você escolheu um herói inválido da DC</p>';
                break;
        }
        break;
    default:
        selectedHeroText.innerHTML = '<p>Você escolheu um universo inválido</p>';
        break;
}
if (isValidHero) {
    let count = 0;
    selectedHeroText.innerHTML = "<p>Você escolheu o herói: " + hero + "</p>";
    while (count < qtdHero) {
        heroesByQtdHero = heroesByQtdHero + "<div class='" + hero + "'></div>";
        count++;
    }
    heroesContainer.innerHTML = heroesByQtdHero;
}