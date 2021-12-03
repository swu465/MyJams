const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// nested preferences schema
const preferenceSchema = new Schema({
    seed_genres: {type: String, required: true},
    target_energy: {type: String, required: true},
    target_popularity: {type: String, required: true},
    target_acousticness: {type: String, required: true},
});

const UserSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    spotifyId: {
        type: String,
        required: true
    },
    spotifyAccessToken: {
        type: String,
        required: true
    },
    spotifyRefreshToken: {
        type: String,
        required: true
    },
    spotifyExpiresIn: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    preferences: [preferenceSchema]
})

const User = mongoose.model('User', UserSchema)
const Preference = mongoose.model('Preferences',preferenceSchema);
module.exports = Preference;
module.exports = User;
