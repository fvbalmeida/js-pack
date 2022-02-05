const Vehicle = require('../models/vehiclesModel')


getAllVehicles = async (req, res) => {
    try {
        const getAll = await Vehicle.find({})
    
        return res.status(200).json({ success: true, data: getAll })
            
    } catch (error) {
            res.status(400).json({ error, message: "Ops! Something went wrong"})
    }
}



getAllUnsoldVehicles = async (req, res) => {
    try {
        const getUnsold = await Vehicle.find({sold: false}).count()

        return res.status(200).json({ success: true, data: `You have ${getUnsold} unsold vehicle(s)` })
        
    } catch (error) {
        res.status(400).json({ error, message: "Ops! Something went wrong"})
    }
}


getVehiclesByBrand = async (req, res) => {
    try {
        const getByBrand = await Vehicle.find({brand: req.params.brand}).count()

        return res.status(200).json({ success: true, data: `You have ${getByBrand} vehicle(s) of the chosen brand` })
        
    } catch (error) {
        res.status(400).json({ error, message: "Ops! Something went wrong"})
    }
}



getPastWeekVehicles = async (req, res) => {
    try {
        const getPastWeek = await Vehicle.find({timestamp:{'$lte':new Date(),'$gte':new Date(Date()-7)}})

        return res.status(200).json({ success: true, data: getPastWeek })

    } catch (error) {
        console.log(error)

        return res.status(404).json({ success: false, message: "Ops!" })
    }
}


getVehiclesByParams = async (req, res) => {
    try {
        const getByParams = await Vehicle.find({
            brand: req.params.brand,
            year: req.params.year,
            sold: req.params.sold             
         })

        return res.status(200).json({ success: true, data: getPastWeek })

    } catch (error) {
        console.log(error)

        return res.status(404).json({ success: false, message: "Ops!" })
    }
}




getVehicleById = async (req, res) => {
    try {
        const getById = await Vehicle.findOne({ _id: req.params.id })

        return res.status(200).json({ success: true, data: getById })

    } catch (error) {
        console.log(error)
        return res.status(404).json({ success: false, message: "Could not find the vehicle" })
    }


    // await Vehicle.findOne({ _id: req.params.id }, (err, vehicle) => {
    //     if (err) {
    //         return res.status(400).json({ success: false, message: err })
    //     }

    //     if (!vehicle) {
    //         return res.status(404).json({ success: false, message: "Could not find the vehicle" })
    //     }

    //     return res.status(200).json({ success: true, data: vehicle })
    // })
}




registerVehicle = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({ success: false, message: 'Fields cannot be empty!' })
    }

    const vehicle = new Vehicle(body)

    if (!vehicle) {
        return res.status(400).json({ success: false, message: "Watch out! Wrong data." })
    }

    vehicle
        .save()
        .then(() => {
            return res.status(201).json({ success: true, message: 'Vehicle successfully registered!', id: vehicle._id })
        })
        .catch(error => {
            return res.status(400).json({ error, message: 'Ops! Could not register your vehicle' })
        })
}



updateVehicle = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({ success: false, message: 'Hey! Write something to update.' })
    }

    Vehicle.findOne({ _id: req.params.id }, (err, vehicle) => {
            
        if (err) {
            return res.status(404).json({ err, message: 'Ops! Could not find the vehicle!' })
        }
            
        vehicle.vehicle = body.vehicle
        vehicle.brand = body.brand
        vehicle.year = body.year
        vehicle.description = body.description
        vehicle.sold = body.sold
                
        vehicle
        .save()
        .then(() => {
            return res.status(200).json({ success: true, message: 'Vehicle suceessfully updated!', id: vehicle._id })
        })
        .catch(error => {
            return res.status(400).json({error, message: 'Ops! Could not update this vehicle!',})
        }) 
    })
}



partialUpdateVehicle = async (req, res) => {
    try {
        const partialUpdate = await Vehicle.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})

        return res.status(200).json({ success: true, message: "Yeah! Data successfully updated.", data: partialUpdate })
        
    } catch (error) {
        res.status(400).json({ error, message: "Ops! Something went wrong"})
    }
}



deleteVehicle = async (req, res) => {
    await Vehicle.findOneAndDelete({ _id: req.params.id }, (err, vehicle) => {

        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!vehicle) {
            return res.status(404).json({ success: false, error: 'Ops! Could not find the vehicle!' })
        }

        return res.status(200).json({ success: true, data: vehicle })
    }).catch(err => console.log(err))
}








module.exports = {
    getVehiclesByParams,
    getVehiclesByBrand,
    getPastWeekVehicles,
    getAllVehicles,
    getAllUnsoldVehicles,
    getVehicleById,
    registerVehicle,
    updateVehicle,
    partialUpdateVehicle,
    deleteVehicle
}
