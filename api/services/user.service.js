const { generateToken } = require("../helpers/token");
const User = require("../models/user");

class UserService {

    async createUser(userDetails) {
        const { email, firstName, lastName, password } = userDetails;
        if (email === undefined || email === null || email.trim().length === 0) {
            throw new Error("Email cannot be empty");
        }
        if (firstName === undefined || firstName === null || firstName.trim().length === 0) {
            throw new Error("First name cannot be empty");
        }
        if (lastName === undefined || lastName === null || lastName.trim().length === 0) {
            throw new Error("Last name cannot be empty");
        }
        if (password === undefined || password === null || password.trim().length === 0) {
            throw new Error("Password cannot be empty");
        }
        if (password.trim().length < 6) {
            throw new Error("Password must be of 6 characters");
        }
        const user = new User(userDetails);
        await user.save();
        const token = generateToken({ ...user });
        return { token };
    }
    
}

module.exports = new UserService;