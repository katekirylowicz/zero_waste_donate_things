const items = [
  "egestas", "sed", "tempus", "ut", "aliquam", "purus", "sit", "amet", "mi", "quis", "hendrerit", "dolor",
];

const lorem = [
  "Quisque lorem sapien, malesuada in lacus ac, elementum luctus arcu.",
  "Sed tristique velit pretium sapien laoreet finibus.",
  "Fusce enim libero, scelerisque eu enim a, viverra bibendum sapien.",
  "Quisque congue sit amet ex non efficitur.",
  "Morbi posuere tempor erat, ac gravida lacus condimentum ut.",
  "Sed nisl magna, tempor non mauris eget, porta finibus leo.",
  "Sed a pellentesque sapien, sit amet tempus turpis.",
  "Duis euismod magna vel nulla bibendum consequat.",
  "Suspendisse malesuada risus eget nibh ullamcorper eleifend.",
  "Aenean finibus magna ut aliquet imperdiet.",
  "In tincidunt cursus purus et posuere.",
  "Ut blandit aliquet eros, quis lobortis enim aliquet nec.",
  "Aliquam in laoreet turpis, laoreet dapibus mi.",
];

const item = {
  copy: "Dolor sit amet consectetur adipiscing elit",
  items: "Marfa, migas, fizzbuz, foo, bar",
  name: "Lorem ipsum",
}

const getRandomItems = () => {
  const arr = [];
  while(arr.length < Math.max(2, Math.ceil(Math.random() * 6)) ){
      const item = items[Math.floor(Math.random() * items.length)]
      if(arr.indexOf(item) === -1) arr.push(item);
  }
  return arr;
}

const names = {
  fundations: 'Fundacja',
  nonGovernmentalOrg: 'Organizacja',
  localCollections: 'Inicjatywa Lokalna',
};

const addItem = (categoryName, index) => ({
  copy: lorem[Math.floor(Math.random() * lorem.length)],
  items: getRandomItems().join(', '),
  name: `${names[categoryName]} “Lorem Ipsum ${index + 1}”`,
});

const mockData = {
  fundations: new Array(Math.max(4, Math.ceil(Math.random() * 15))).fill(null).map((_noop, index) => addItem('fundations', index)), 
  nonGovernmentalOrg: new Array(Math.ceil(Math.random() * 15)).fill(null).map((_noop, index) => addItem('nonGovernmentalOrg', index)),
  localCollections: new Array(3).fill(null).map((_noop, index) => addItem('localCollections', index)),
}

export default mockData;