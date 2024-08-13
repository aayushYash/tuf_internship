// Run me using 'node create_admin.js'
// This script creates the first admin.

const { Admin } = require("./models");
const bcrypt = require("bcrypt");

async function createAdmin(username, password) {
  if (username != "" && password != "") {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
      const admin = await Admin.create({
        username: username,
        password: hashedPassword,
      });
      await admin.save();
      console.log(
        `sucessfully created \nusername: ${username}\npassword: ${password}`,
      );
    } catch (err) {
      console.log(err);
    }
  }
}

createAdmin("admin", "admin");
// console.log(createAdmin("rrr", "rrr"));
