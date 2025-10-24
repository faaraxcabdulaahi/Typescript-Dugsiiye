interface UIser {
  username: string;
  password: string;
  email?: string;
  readonly id: number;
}

function login(user: UIser) {
 user.username && user.password && user.email
    ? console.log("Login successful!")
    : console.log("Invalid credentials.")

    console.log(user.username, user.password)
    
}

const userOne: UIser = {
  id: 1444837728208327,
  username: "Faarax",
  password: "12345edw3wfw3",
  email: "faarax@gmail.com"
};

login(userOne);