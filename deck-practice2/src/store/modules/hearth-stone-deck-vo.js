import { v4 as uuidv4 } from "uuid";
import _cloneDeep from "lodash/cloneDeep";

const mapCards = (card, _deckId, _cardId) => {
  const refinedCard = _cloneDeep(card);
  const rarity = refinedCard.rarity || {};
  refinedCard.rarityDustValue = rarity.dustValue || 0;
  refinedCard.rarityId = rarity.id || 0;
  refinedCard.rarityName = rarity.name || "";
  refinedCard._deckId = _deckId;
  refinedCard._cardId = _cardId;
  return refinedCard;
};

export const mapCardsByKeys = (cards, deckId) => {
  const newCardWithKey = new Map();
  cards.forEach((card) => {
    const _id = uuidv4();
    newCardWithKey.set(_id, mapCards(card, deckId, _id));
  });
  return newCardWithKey;
};

const mapHearthStoneData = (data, _deckId) => {
  const hs = _cloneDeep(data);
  const hero = hs.hero || {};
  hs.heroImage = hero.image || "";
  const _class = hs.class || {};
  hs.className = _class.name || "";
  hs._deckId = _deckId;
  return hs;
};

export const mapDecksByKeys = (decks) => {
  const newDeckWithKey = new Map();
  decks.forEach((deck) => {
    const _deckId = uuidv4();
    const { cards } = deck;
    deck._cards = mapCardsByKeys(cards, _deckId);
    newDeckWithKey.set(_deckId, mapHearthStoneData(deck, _deckId));
  });
  return newDeckWithKey;
};
