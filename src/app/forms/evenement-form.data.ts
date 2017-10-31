export default [
  {
    id: 'id_naamevenement',
    inputType: 'textregel',
    label: 'Wat is de naam van het evenement?'
  },
  {
    //TODO: validatie maximaal 100 woorden
    id: 'id_evenementbeschrijving',
    inputType: 'textvak',
    label: 'Korte omschrijving van activiteiten tijdens het evenement'
  },
  {
    //TODO: validatie: moet minimaal vier weken in de toekomst liggen
    id: 'id_tijdvakevenement',
    inputType: 'datum',
    label: 'Wat is de datum van het evenement?'
  }, {
    id: 'id_starttijd',
    inputType: 'tijd',
    label: 'Wat is de starttijd van het evenment?'
  }, {
    id: 'id_eindtijd',
    inputType: 'tijd',
    label: 'Wat is de eindtijd van het evenment?'
  }
];
