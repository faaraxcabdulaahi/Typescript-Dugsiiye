function echo<T>(data: T): T {
  return data;
}

const theName: string = "Faarax Cabdulaahi Cali";
console.log(theName);

const theAge: number = 23;
console.log(theAge);

const familyNames: string[] = ["caasho", "cismaan", "Geele"];


type bloodParameter = {
    key:string;
}

const bloodGroups: { [key: string]: string } = {
  A: "A",
  B: "B",
  AB: "AB",
  O: "O",
};

console.log(familyNames[0].toUpperCase());

interface ApiResult<T> {
  status: string;
  data: T;
}

const stringResult: ApiResult<string> = {
  status: "success",
  data: "Hello World",
};
console.log(stringResult);



type User = {
  id: number;
  name: string;
};
const userResult: ApiResult<User> = {
  status: "success",
  data: { id: 1, name: "Barasho" },
};

console.log(userResult);
