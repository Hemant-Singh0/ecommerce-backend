const express = require('express');
const { registerUser, loginUser, getUserById } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/:id', protect, getUserById);


module.exports = router;