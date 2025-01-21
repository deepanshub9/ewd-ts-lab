import { Friend, Colleague } from "./myTypes";
import { friends, colleagues } from "./01-basics";

function older(f: Friend): string {
  f.age += 1;
  return `${f.name} is now ${f.age}`;
}
console.log(older(friends[0]));

function allOlder(friends: Friend[]): string[] {
  return friends.map((friends) => {
    friends.age += 1;
    return `${friends.name} is ${friends.age}`;
  });
}
console.log(allOlder(friends));

function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));




function addColleague(
  cs: Colleague[],
  name: string,
  department: string,
  email: string
): void {
  const highestExt = Math.max(...cs.map((c) => c.contact.extension));
  const newColleague: Colleague = {
    name,
    department,
    contact: {
      email,
      extension: highestExt + 1,
    },
  };
  cs.push(newColleague);
}
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));
