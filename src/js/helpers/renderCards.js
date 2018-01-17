export function renderCards(cards) {
    if (cards) {
        return cards.map((card) => (
            `
            <div class="Cards" data-id="${card.id}">
            <div class="demo-card-square mdl-card mdl-shadow--2dp">
              <div class="mdl-card__title mdl-card--expand">
                <h2 class="mdl-card__title-text">${card.title}</h2>
              </div>
              <div class="mdl-card__supporting-text">
                <img src="../assets/images/portrait.jpg">
                <span class="mdl-level">Difficulté : <ul> <li></li> <li></li> <li></li> </ul> </span>
                <span class="mdl-distance">2,6 Km</span>
              </div>
            </div>
            </div>
            `
        ));
    }
}