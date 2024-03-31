const { z } = require("zod")

const signupSchema = z.object({
  username: z.string({ required_error: "Name is required..." }).trim().min(3, { message: "Name must be at least of 3 character..." }).max(255, { message: "Name not be excedd 255 characters..." }),
  email: z.string({ required_error: "Email is required..." }).trim().email({ message: "Invalid email address..." }).min(3, { message: "Email must be at least of 3 character..." }).max(255, { message: "Email not be excedd 255 characters..." }),
  phone: z.string({ required_error: "Phone is required..." }).trim().min(10, { message: "Phone must be at least of 10 character..." }).max(20, { message: "Phone not be excedd 20 characters..." }),
  password: z.string({ required_error: "Password is required..." }).min(7, { message: "Password must be at least of 7 character..." }).max(1024, { message: "Password not be excedd 1024 characters..." }),
});
const loginSchema = z.object({
  email: z.string({ required_error: "Email is required..." }).trim().email({ message: "Invalid email address..." }).min(3, { message: "Email must be at least of 3 character..." }).max(255, { message: "Email not be excedd 255 characters..." }),
  password: z.string({ required_error: "Password is required..." }).min(7, { message: "Password must be at least of 7 character..." }).max(1024, { message: "Password not be excedd 1024 characters..." }),
});

module.exports = { signupSchema, loginSchema };