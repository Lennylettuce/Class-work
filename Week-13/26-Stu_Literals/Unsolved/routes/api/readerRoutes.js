const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Reader, Book, LibraryCard } = require('../../models');

// GET all readers
router.get('/', async (req, res) => {
  try {
    const readerData = await Reader.findAll({
      include: [{ model: LibraryCard }, { model: Book }],
      // TODO: Add a sequelize literal to get a count of short books
        //CAN USE INSTANCE METHODS INSIDE THE MODEL TO MAKE THIS SUBQUERY MORE DRY
      attributes: {
        include: [
          [
            sequelize.literal(
              //WHERE clause gets specific with results-only get claimed ones
              '(SELECT COUNT(*) FROM book WHERE book.reader_id = reader_id AND pages BETWEEN 300 AND 100) '
            ),
            'shortBooks',
          ],
        ],
      },
    });
    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single reader
router.get('/:id', async (req, res) => {
  try {
    const readerData = await Reader.findByPk(req.params.id, {
      include: [{ model: LibraryCard }, { model: Book }],
      // TODO: Add a sequelize literal to get a count of short books
      attributes: {
        include: [
          [
            sequelize.literal(
              '(SELECT SUM(pages) FROM book WHERE book.reader_id = reader_id AND pages BETWEEN 300 AND 100) '
            ),
            'shortBooks',
          ],
        ],
      },
    });

    if (!readerData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a reader
router.post('/', async (req, res) => {
  try {
    const readerData = await Reader.create(req.body);
    res.status(200).json(readerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a reader
router.delete('/:id', async (req, res) => {
  try {
    const readerData = await Reader.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!readerData) {
      res.status(404).json({ message: 'No reader found with that id!' });
      return;
    }

    res.status(200).json(readerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
