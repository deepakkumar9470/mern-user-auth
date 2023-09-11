const express  = require('express')

const router = express.Router()
const {signup,login,logout, getProfile, updateProfile}  = require('../controllers/userController');
const authProtect = require('../middleware/authentication');

// @ /api/user/resister 
router.post('/register',signup);



// @ /api/user/login 
router.post('/login', login);


// @ /api/user/profile 
router.get('/profile',authProtect ,getProfile)


// @ /api/user/profile/123 
router.put('/profile', authProtect,updateProfile)

// @ /api/user/logout 
router.post('/logout', logout);

module.exports = router