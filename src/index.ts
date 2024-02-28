export {};

// Check if Value with Unknown Type contains Property in TS

interface Person {
  name: string;
  age: string;
}

function isPerson(obj: unknown): obj is Person {
  return (
    typeof obj === 'object' && obj !== null && 'name' in obj && 'age' in obj
  );
}

const obj: unknown = {
  name: 'Bobby Hadz',
  age: 30,
};

if (isPerson(obj)) {
  console.log(obj.name); // 👉️ "Bobby Hadz"
  console.log(obj.age); // 👉️ 30
}
