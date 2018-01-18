export function renderCards(cards) {
    if (cards) {
        return cards.map((card) => {
            const stars = createStarts(card.difficulty);
            return (
                `
            <div class="demo-card-square mdl-card mdl-shadow--2dp Cards" data-id="${card.id}">
              <div class="mdl-card__title mdl-card--expand"></div>
              <div class="mdl-card__supporting-text">
              <h2 class="mdl-card__title-text">${card.title}</h2>
              <div class="mdl-card__supporting-text--left">
                <span class="mdl-level">Difficulté : 
                    <ul class="mdl-card__list">
                        ${stars}
                    </ul>
                </span>
                </div>
                <div class="mdl-card__supporting-text--left">
                    <span class="mdl-distance">2,6 <span>Km</span></span>
                </div>
              </div>
            </div>
            `
            )
        })
    } else {
        // TODO: Render empty state if no cards.
        return `
        <div>
            <img src="http://www.letelegramme.fr/images/2017/08/10/alexandre-s-est-assis-a-la-place-du-pianiste-mais-n-ose-pas_3556961.jpg" />
            <h1>Oh! Il semble qu'aucun Urbex ne corresponde à votre recherche...</h1>
        </div>
        `;
    }
}

let createStarts = (nbStars) => {
    let stars = '';
    for (let i = 0; i < nbStars; i++){
        stars += "<li class='mdl-card__list__item'><span class='icon-flashlight'></span></li>";
    }
    return stars;
};