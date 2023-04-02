const mg = require('./db.js')



const Pirate = mg.model('Pirate', mg.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    treasures: {
        type: Number,
        required: true
    },
    catchPhrase: {
        type: String,
        required: true
    },
    position:{
        type:String,
        required:true
    },
    pegLeg: {
        type: Boolean,
        required:true
        
    },
    eyePatch: {
        type: Boolean,
        required:true
        
        
    },
    hookHand: {
        type: Boolean,
        required:true
        
    },
}))


module.exports = {
    Pirate
}   