const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vehicle = new Schema(
    {
        vehicle: { 
            type: String,
            required: [true, 'Vehicle required'] 
        },
        brand: { 
            type: String,
            enum: {
                values: [
                    'Abarth',
                    'Aixam',
                    'Alfa Romeo',
                    'Aston Martin',
                    'Audi',
                    'Austin',
                    'Bedford',
                    'Bentley',
                    'BMW',
                    'Cadillac',
                    'Chatenet',
                    'Chausson',
                    'Chevrolet',
                    'Chrysler',
                    'Ci',
                    'Citroen',
                    'Cupra',
                    'Dacia',
                    'Daihatsu',
                    'Datsun',
                    'Dodge',
                    'DS',
                    'Ferrari',
                    'Fiat',
                    'Ford',
                    'Honda',
                    'Hummer',
                    'Hyundai',
                    'Infiniti',
                    'Isuzu',
                    'Iveco',
                    'Jaguar',
                    'Jeep',
                    'Kia',
                    'Lamborghini',
                    'Lancia',
                    'Land Rover',
                    'Lexus',
                    'Ligier',
                    'Lotus',
                    'Maserati',
                    'Mazda',
                    'McLaren',
                    'Mercedes-Benz',
                    'MG',
                    'Microcar',
                    'MINI',
                    'Mitsubishi',
                    'Morris',
                    'Nissan',
                    'Opel',
                    'Peugeot',
                    'Pontiac',
                    'Porsche',
                    'Renault',
                    'Rolls-Royce',
                    'Rover',
                    'Saab',
                    'Seat',
                    'Skoda',
                    'Smart',
                    'SsangYong',
                    'Subaru',
                    'Sunlight',
                    'Suzuki',
                    'Tata',
                    'Tesla',
                    'Toyota',
                    'Triumph',
                    'UMM',
                    'Volkswagen',
                    'Volvo'
                ],
                message: '{VALUE} is not accepted'
            }, 
            required: [true, 'Brand required']  
        },
        year: { 
            type: Number, 
            required: [true, 'Year required'],
            min: 1886,
            max: 2022,
            validate: {
                validator: Number.isInteger
            } 
        },
        description: {
            type: String,
            required: [true, 'Description required']
        },
        sold: {
            type: Boolean,
            required: [true, 'Information required'] 
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('vehicles', Vehicle);