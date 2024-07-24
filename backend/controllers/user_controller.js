import bcrypt from 'bcrypt';
import userSchema from '../models/user.js'

const userController = {
    userSingUp: async (req, res) => {
        try {
            const { firstName, lastName, email, password, confirmPassword } = req?.body
            //checking all items are present
            if (firstName && lastName && email && password && confirmPassword && (password === confirmPassword)) {
                //checking email already exist?
                const existingUser = await userSchema.findOne({ email });
                if (existingUser) {
                    return res.status(400).json({ message: 'User already exists.' });
                } else {
                    //hashing password
                    const saltRounds = 10;
                    const hashedPassword = await bcrypt.hash(password, saltRounds);
                    //adding new user
                    const newUser = new userSchema({
                        firstName,
                        lastName,
                        email,
                        password: hashedPassword,
                        googleSigned: false
                    });
                    const userResponse = await newUser.save();
                    console.log(userResponse, 'user response');
                    return res.status(200).json({ message: 'Success', userDetails: userResponse });

                }
            }
            return res.status(400).json({ message: 'Expected values are missing...', error: true });

        } catch (err) {
            console.log(err, 'error');
            return res.status(400).json({ message: 'Something went wrong. please try again..', error: true });
        }
    },
}

export default userController;