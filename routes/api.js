const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Adventure = require('../models/adventure');
const Location = require('../models/location');

// get all adventures from api
router.get('/adventures', (req, res) => {
  Adventure.find({}, (err, adventures) => {
    if (err) res.json(err)
    res.json(adventures)
  })
})

// get one adventure from the api and all associated locations
router.get('/adventures/:id', (req, res) => {
  Adventure.findById(req.params.id).populate('locations').exec( (err, adventure) => {
    if (err) res.json(err)
    res.json(adventure)
  })
})

// get all adventures associated with user
router.get('/users/:id', (req, res) => {
  User.findById(req.params.id).populate('adventures').exec( (err, user) => {
    if (err) res.json(err)
    res.json(user)
  })
})

// update a adventure name
router.post('/adventures', (req, res) => {
  let id = req.body.adventureId
  Adventure.findOneAndUpdate({_id: id}, {
    name: req.body.adventureName,
  }, {
    new: true
  }, (err, adventure) => {
    if (err) res.json(err)
    res.json(adventure)
  });
})

// post a adventure
router.post('/:id/adventures', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    let newadventure = new Adventure({
      name: req.body.name,
    })
    newadventure.save( (err,adventure) => {
      user.adventures.push(adventure)
      user.save()
      if (err) res.json(err)
      res.json(adventure)
    })
  })
})

// post a location
router.post('/adventures/:id/locations', (req, res) => {
  Adventure.findById(req.params.id, (err, adventure) => {
    let newLocation = new Location({
      latitude: req.body.lat,
      longitude: req.body.lng,
      pictureUrl: req.body.pictureUrl,
      adventureIndex: req.body.adventureIndex
    })
    newLocation.save( (err, location) => {
      adventure.locations.push(location)
      adventure.save( (err, adventure) => {
        if (err) res.json(err)
        res.json(adventure)
      })
    })
  })
})

// delete a adventure
router.delete('/:uid/adventures/:aid', (req, res) => {
  User.findById(req.params.uid, (err, user) => {
    user.adventures.pull(req.params.lid)
    user.save( err => {
      if (err) res.json(err)
      Adventure.findByIdAndDelete(req.params.lid, (err) => {
        if (err) res.json(err)
        res.json(user)
      })
    })
  })
})

router.get('/', (req, res) => {
  res.json({type: 'success', message: 'You accessed the protected api routes'})
});


module.exports = router;