const { Listing } = require('./index');
const { db } = require('./index');

db.dropDatabase();

const random = (min, max, floor) => {
  let num;
  if (floor) {
    num = min + Math.floor(Math.random() * (max - min));
    return num;
  }
  num = (min + (Math.random() * (max - min))).toFixed(2);
  return num;
};

const newBoolean = () => {
  const num = random(0, 10, true);
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const randRating = () => {
  const chance = random(0, 100, true);
  if (chance > 20) { // arbitrarily set chance of reviews below 4 to 20%
    const num = random(4, 5, false);
    console.log(num);
    return `${num}`;
  }
  const num = random(1, 3, false);
  return `${num}`;
};

const randReviews = () => {
  const num = random(0, 1500, true);
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return ` (${num})`;
};

const generateReview = () => {
  const reviews = randReviews();
  if (reviews === 0) {
    return 'New'; // include "No reviews yet" case? -> no star either
  }
  if (reviews === 1) {
    return '1 review';
  }
  return randRating() + reviews;
};

const listing = () => {
  const listings = [
    'Entire house ',
    'Entire villa ',
    'Entire apartment ',
    'Entire guesthouse ',
    'Private Room ',
    'Studio ',
    'Entire guest suite ',
  ];
  const numBeds = `${random(0, 10, true)} beds`;
  return listings[random(0, 6, true)] + numBeds;
};

const titles = [
  'Marton End',
  'Honeysuckle Lodge',
  'Seaside Escape',
  'Roselands Getaway',
  'Pigeon\'s Lodge',
  'Rose House',
  'Meadowside',
  'Church End',
  'The Old Lighthouse',
  'Applelands',
  'Lakeside',
  'Palmlands',
  'Cherry Lodge',
  'Orchard End',
  'Primrose Way',
  'Serendipity',
  'Garden Grove',
];
const adjectives = [
  'Stunning',
  'Spacious',
  'Private home',
  'Cozy',
  'Lovely',
  'Home away from home',
  'Bright',
  'Charming',
  'Luxurious',
  'Modern',
];
const nouns = [
  ' escape',
  ' bungalow',
  ' retreat',
  ' getaway',
  ' all-inclusive stay',
  ' contemporary suite',
  ' estate',
];
const addOns = [
  ' w/ Jacuzzi',
  ' Downtown',
  ' Nightlife',
  ' w/ Pool',
  ' w/ City View',
  ' close to the Beach',
  ' Near Trails',
  ' in the Hills',
];

// pull random from array of names
const randTitle = () => {
  const index = random(0, titles.length, true);
  const index1 = random(0, adjectives.length, true);
  const index2 = random(0, nouns.length, true);
  const index3 = random(0, addOns.length, true);
  return `${titles[index]} • ${adjectives[index1]}${nouns[index2]}${addOns[index3]}`;
};

const randPrice = () => {
  const num = random(300, 2000, true);
  return `$${num} / night`;
};

const images = [
  'https://keybox-houses.s3-us-west-1.amazonaws.com/adam-winger-VGs8z60yT2c-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/deborah-cortelazzi-gREquCUXQLI-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/irina-murza-PJMbzWAz26M-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/greg-nunes-aQC3_2e2tU0-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/digital-marketing-agency-ntwrk-g39p1kDjvSY-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/daniel-faust-EPzfdoMYm7s-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/fran-hogan-lloSQSgdoyE-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/florian-schmidinger-b_79nOqf95I-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/david-veksler-VW5YwCYbPyk-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/daniel-faust-pQO10MluyrE-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/adrien-aletti-NB8stCglg9w-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/im3rd-media-CbZ4EDP__VQ-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/greg-rivers-rChFUMwAe7E-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/humphrey-muleba-dyj7RTs85Fs-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/francesca-tosolini-hCU4fimRW-c-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/eduard-militaru-VXiLCpne3cI-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/fran-hogan-zhs_y6CLWco-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/house-method-CqVHT8g45R8-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/jacques-bopp-Hh18POSx5qk-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/jcs-chen-sGblr5yVXiM-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/judy-grayson-2jk97TV-I04-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/kilarov-zaneit-aXq37rUfotU-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/mark-champs-Id2IIl1jOB0-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/naomi-ellsworth-EMPLSuvDuhQ-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/naomi-hebert-MP0bgaS_d1c-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/nuzha-naashidh-D98T9aHmLP0-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/patrick-perkins-3wylDrjxH-E-unsplash.jpg',
  'https://keybox-houses.s3-us-west-1.amazonaws.com/patrick-perkins-iRiVzALa4pI-unsplash.jpg',
];
const imageUrl = () => {
  const index = random(0, images.length, true);
  return images[index];
};

const generatePhotos = () => {
  const photos = [];
  for (let j = 0; j < 12; j += 1) {
    const photo = {};
    photo.superhost = newBoolean();
    console.log();
    photo.heart = newBoolean();
    photo.reviews = generateReview();
    photo.listing = listing();
    photo.title = randTitle();
    photo.price = randPrice();
    photo.image = imageUrl();
    photos.push(photo);
  }
  return photos;
};

const seed = (/* callback */) => {
  const results = [];
  for (let i = 1; i <= 100; i += 1) {
    const roomData = {};
    roomData.id = i;
    roomData.photos = generatePhotos();
    results.push(roomData);
  }
  Listing.insertMany(results, (err, data) => {
    if (err) {
      console.log(err);
      // callback(err);
    } else {
      console.log('Seeding successful! ', data);
      // console.log(Listing.find());
      // callback('Added to db: ', data);
    }
  });
};

seed();
