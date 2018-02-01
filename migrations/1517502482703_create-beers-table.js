exports.up = (pgm) => {
  const beersTable = {
    id: {
      type: 'serial',
      primaryKey: true,
    },
    name: {
      type: 'text',
      notNull: true
    },
    brewery: {
      type: 'text'
    },
    description: {
      type: 'text'
    }
  };

  pgm.createTable('beers', beersTable);
};