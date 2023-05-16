import fs from "fs";

const UserDataPath = "./UserData.json";

const saveUser = (newUser) => {
  return new Promise((resolve, reject) => {
    fs.readFile(UserDataPath, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      let userData = JSON.parse(data);

      // Check if username already exists
      const userExists = userData.some((user) => user.username === newUser.username);
      if (userExists) {
        reject(new Error("Username already exists. Please choose a different username."));
        return;
      }

      // Add the new user data
      userData.push(newUser);

      // Write the updated user data back to the file
      fs.writeFile(UserDataPath, JSON.stringify(userData), "utf8", (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve();
      });
    });
  });
};

export { saveUser };
