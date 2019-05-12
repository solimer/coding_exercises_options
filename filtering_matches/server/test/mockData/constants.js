module.exports = {
  hasPhoto: { propName: 'main_photo' },
  inContacts: { propName: 'contacts_exchanged' },
  isFavourite: { propName: 'favourite' },
  compatibility: { propName: 'compatibility_score', minValue: 0.1, maxValue: 0.99 },
  age: { propName: 'age', minValue: 18, maxValue: 95 },
  height: { propName: 'height_in_cm', minValue: 135, maxValue: 210 },
  distance: { propName: 'city', minValue: 30, maxValue: 300 },
};
