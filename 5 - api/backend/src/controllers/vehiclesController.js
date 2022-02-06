const Vehicle = require('../models/vehiclesModel')


getAllVehicles = async (req, res) => {
    try {
        const getAll = await Vehicle.find({})
    
        return res.status(200).json({ success: true, result: getAll })

            
    } catch (error) {
       return res.status(400).json({ success: false, error: `Error name: ${error.name}, Error message: ${error.message}` })
    }
}



getAllUnsoldVehicles = async (req, res) => {
    try {
        const getUnsold = await Vehicle.find({sold: false}).count()
        
        return res.status(200).json({ success: true, result: `You have ${getUnsold} unsold vehicles!` })


    } catch (error) {
        return res.status(400).json({ success: false, error: `Error name: ${error.name}, Error message: ${error.message}` })
    }
}



getVehiclesByBrand = async (req, res) => {
    try {
        const getByBrand = await Vehicle.find({brand: req.params.brand}).count()
        
        if (!getByBrand){
            return res.status(404).json({ success: false, result: `Brand ${req.params.brand} was not found` })
        }

        return res.status(200).json({ success: true, result: `You have ${getByBrand} ${req.params.brand} vehicle(s)` })

        
    } catch (error) {
        return res.status(400).json({ success: false, error: `Error name: ${error.name}, Error message: ${error.message}` })
    }
}



getLastWeekVehicles = async (req, res) => {
    try {
        const getLastWeek = await Vehicle.find({ createdAt: {
            $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000), 
            $lte: new Date() 
        }})

        return res.status(200).json({ success: true, result: getLastWeek })


    } catch (error) {
        return res.status(400).json({ success: false, error: `Error name: ${error.name}, Error message: ${error.message}` })
    }
}



getVehiclesByDecade = async (req, res) => {
    const decade = parseInt(req.params.decade)

    if (decade % 10 != 0 || decade < 0) {
        return res.status(400).json({ success: false, result: "This input is invalid" })
    }

    const beginningOfDecade = decade
    const endOfDecade = decade + 9
   
    try {
        const year = await Vehicle.find({ year: { $gte: beginningOfDecade, $lte: endOfDecade } }).count()

        return res.status(200).json({ success: true, result: `You have ${year} vehicles from the ${decade}s decade!` })

        
    } catch (error) {
        return res.status(400).json({ success: false, error: `Error name: ${error.name}, Error message: ${error.message}` })
    }
}



getVehicleById = async (req, res) => {
    try {
        const getById = await Vehicle.findOne({ _id: req.params.id })

        if (!getById) {
            return res.status(404).json({ success: false, result: `ID ${req.params.id} was not found!` })
        }

        return res.status(200).json({ success: true, result: getById })


    } catch (error) {
        return res.status(400).json({ success: false, error: `Error name: ${error.name}, Error message: ${error.message}` })
    }
}



registerVehicle = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({ success: false, result: 'Fields cannot be empty!' })
    }

    const vehicle = new Vehicle(body)

    if (!vehicle) {
        return res.status(400).json({ success: false, result: "Watch out! Wrong data." })
    }
        
    vehicle
    .save()
    .then(() => {
        return res.status(201).json({ success: true, result: 'Vehicle successfully registered!', id: vehicle._id })
    })
    .catch(error => {
        return res.status(400).json({ success: false, error: `Error name: ${error.name}, Error message: ${error.message}` })
    })
}



updateVehicle = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({ success: false, result: 'Hey! Write something to update!' })
    }

    const vehicle = await Vehicle.findOne({ _id: req.params.id })

    if (!vehicle) {
        return res.status(404).json({ success: false, result: `ID ${req.params.id} was not found!` })
    }
       
    
    try {
        vehicle.vehicle = body.vehicle
        vehicle.brand = body.brand
        vehicle.year = body.year
        vehicle.description = body.description
        vehicle.sold = body.sold

        const save = await vehicle.save()

        return res.status(200).json({ success: true, result: 'Vehicle successfully updated!', id: vehicle._id })


    } catch (error) {
        return res.status(400).json({ success: false, error: `Error name: ${error.name}, Error message: ${error.message}` })    
    }
}



partialUpdateVehicle = async (req, res) => {
    try {
        const partialUpdate = await Vehicle.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true})

        if (!partialUpdate) {
            return res.status(404).json({ success: false, result: `ID ${req.params.id} was not found!` })
        }

        return res.status(200).json({ success: true, result: "Yeah! Data successfully updated.", data: partialUpdate })

        
    } catch (error) {
        return res.status(400).json({ success: false, error: `Error name: ${error.name}, Error message: ${error.message}` })  
    }
}



deleteVehicle = async (req, res) => {
    try {
        const deleteById = await Vehicle.findOneAndDelete({ _id: req.params.id })

        if (!deleteById) {
            return res.status(404).json({ success: false, result: `ID ${req.params.id} was not found!` })
        }
    
        return res.status(200).json({ success: true, result: "Vehicle successfully deleted!", data: deleteById })


    } catch (error) {
        return res.status(400).json({ success: false, error: `Error name: ${error.name}, Error message: ${error.message}` })  
    }
}



module.exports = {
    getAllVehicles,
    getAllUnsoldVehicles,
    getVehiclesByBrand,
    getLastWeekVehicles,
    getVehiclesByDecade,
    getVehicleById,
    registerVehicle,
    updateVehicle,
    partialUpdateVehicle,
    deleteVehicle
}
