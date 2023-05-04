const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Location, Traveler } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const travelerData = await Traveler.findAll({
            include: [{ model: Location }],
            attributes: {
                include: [
                    [
                        sequelize.literal(
                            '(SELECT * FROM location WHERE location.traveler_id = traveler_id)'
                        ),
                        'travelerInfo',
                    ],
                ],
            },
        });
        res.status(200).json(travelerData);
    } catch (err) {
        res.status(500).json(err);
    }
});