// temporary array of JS Objects representing Contests
export default {
  contests: [
    {
      name: "Best Burrito in SF",
      dateCreated: "10/25/2017",
      lat: 37.7749,
      lng: 122.4194,
      id: 1,
      items: [
        {
          name: 'Sushirrito',
          placeName: 'Sushi Garden',
          loc: 'Sushi Garden',
          placeId: '12934834',
          lat: 37.7749,
          long: 122.4194,
        },
        {
          name: 'Vegan Burrito',
          loc: 'Veggie Palace'
        },
      ]
    },
    {
      name: "Best Sushi in SF",
      dateCreated: "10/12/2017",
      lat: 37.7749,
      lng: 122.4194,
      id: 2,
      items: [
        {
          name: 'Tuna roll',
          loc: 'RawFish.io'
        },
        {
          name: 'Sushirrito',
          loc: 'Sushi Garden'
        },
      ]
    },
    {
      name: "Best Vegan Food in the Bay Area",
      dateCreated: "10/2/2017",
      id: 3,
      lat: 37.7749,
      lng: 122.4194,
      items: [
        {
          name: 'Vegan Burrito',
          loc: 'Veggie Palace'
        },
        {
          name: 'Tofu Noodle Soup',
          loc: 'Golden Era'
        }
      ]
    },
    {
      name: "Best Hot Dogs in SF",
      dateCreated: "10/17/2017",
      lat: 37.7749,
      lng: 122.4194,
      id: 4,
      items: [
        {
          name: 'Regular HotDog',
          loc: 'Regular HotDogs, Inc.'
        },
        {
          name: 'Fancy HotDog',
          loc: 'Fancy HotDogs, Inc.'
        },
        {
          name: 'Fancier HotDog',
          loc: 'Fancier HotDogs & Co.'
        }
      ]
    },
    {
      name: "Best Burgers in Oakland",
      dateCreated: "9/18/2017",
      id: 5,
      lat: 37.8044,
      lng: 122.2711,
      items: [
        {
          name: "Bl00 Ch33s3 Burg3r",
          loc: 'c00ler than u burg3rs'
        },
        {
          name: 'The Ethical Burger',
          loc: 'Veggie Palace'
        },
        {
          name: 'Jalapeno',
          loc: 'Hot Licks Burgers'
        }
      ]
    }
  ]
};

// User example
export const User = {
  username: 'bob',
  password: 'password',
  email: 'test@test.com',
  photo: '/bob.jpg'
};

//Contest example
export const Contest = {
  name: 'best burrito',
};
