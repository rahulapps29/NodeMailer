// data/labels.js

let labels = [
  "Sugar",
  "Salt",
  "Rice",
  "Wheat",
  "Dal",
  "Tea",
  "Coffee",
  "Flour",
  "Spices",
  "Oil",
  "Butter",
  "Ghee",
  "Chilli",
  "Turmeric",
  "Coriander",
  "Cumin",
  "Mustard",
  "Cinnamon",
  "Cloves",
  "Cardamom",
  "Garlic",
  "Ginger",
  "Basmati",
  "Atta",
];

module.exports = {
  getLabels: () => labels,
  updateLabels: (newLabels) => {
    labels = newLabels;
  },
};
