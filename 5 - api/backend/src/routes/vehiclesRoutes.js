const express = require('express')

const vehiclesController = require('../controllers/vehiclesController')

const router = express.Router()

router.get('/vehicles', vehiclesController.getAllVehicles)
router.get('/vehicles/unsold', vehiclesController.getAllUnsoldVehicles)
router.get('/vehicles/last-week', vehiclesController.getPastWeekVehicles)
router.get('/vehicles/:brand', vehiclesController.getVehiclesByBrand)
router.get('/vehicles?brand={brand}&year={year}&sold={sold}', vehiclesController.getVehiclesByParams)
router.get('/vehicles/:id', vehiclesController.getVehicleById)
router.post('/vehicles', vehiclesController.registerVehicle)
router.put('/vehicles/:id', vehiclesController.updateVehicle)
router.patch('/vehicles/:id', vehiclesController.partialUpdateVehicle)
router.delete('/vehicles/:id', vehiclesController.deleteVehicle)

module.exports = router