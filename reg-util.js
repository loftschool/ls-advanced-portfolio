const request = require("request");
const signale = require("signale");
const promptly = require("promptly");
const config = require("./env.paths.json");

const generateUsername = name => {
  const date = new Date();
  return `${name}-0${date.getMonth()}${date.getFullYear()}`;
};

const registerUser = (name, password) => {
  signale.await("Отправляем запрос");
  request.post(
    {
      url: config.REG_URL,
      form: {
        name,
        password
      }
    },
    (err, response, body) => {
      if (err) signale.fatal(err);
      
      console.log(response.statusCode);
      

      switch (response.statusCode) {
        case 302:
          const newUserName = generateUsername(name);
          signale.error(
            `Такой пользователь уже существует. Попробуйте имя: ${newUserName}`
          );
          break;
        case 200:
          signale.success(
            `Регистрация прошла успешно для пользователя: ${name}`
          );
          break;
      }
    }
  );
};

const validator = value => {
  if (value.length <= 3) {
    signale.error("В поле должно быть больше 3-ёх символов");
    throw new Error();
  }

  return value;
};

async function askForPasswords() {
  const password = await promptly.password("Введите пароль: ", {
    replace: "*",
    validator
  });
  const repeatPassword = await promptly.password("Повторите пароль: ", {
    replace: "*",
    validator
  });

  if (password === repeatPassword) {
    return password;
  } else {
    signale.warn("Пароли не совпадают. Попробуйте еще раз!");
    return askForPasswords();
  }
}

async function main() {
  const name = await promptly.prompt("Введите имя пользователя: ", {
    validator
  });
  const password = await askForPasswords();

  registerUser(name.trim(), password.trim());
}

main();
