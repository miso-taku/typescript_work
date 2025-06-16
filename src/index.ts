type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
Taro,26,1
Jiro,18,0
Saburo,32,0
Ichiro,55,1
`

const users: User[] = data.split("\n").map((line) => {
  const [name, ageString, premiumUserString] = line.split(",");
  const age = Number(ageString);
  const premiumUser = premiumUserString === "1";
  return { name, age, premiumUser };
});

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザーです`);
  } else {
    console.log(`${user.name} (${user.age})はプレミアムユーザーではありません`);
  }
}