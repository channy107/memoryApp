const posts = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'user1',
      profileImage: require('../assets/img/profile1.jpeg'),
    },
    content: 'content test',
    likeCount: 3,
    imageUrls: [
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
    ],
    comments: [
      {
        id: '1',
        user: {
          id: '2',
          name: 'user2',
          profileImage: require('../assets/img/profile2.jpeg'),
        },
        content: 'comment test1',
      },
    ],
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'user2',
      profileImage: require('../assets/img/profile2.jpeg'),
    },
    content: 'content test2',
    likeCount: 4,
    imageUrls: ['https://source.unsplash.com/random'],
    comments: [
      {
        id: '2',
        user: {
          id: '1',
          name: 'user1',
          profileImage: require('../assets/img/profile1.jpeg'),
        },
        content: 'comment test2',
      },
      {
        id: '3',
        user: {
          id: '3',
          name: 'user3',
          profileImage: require('../assets/img/profile3.jpeg'),
        },
        content: 'comment test3',
      },
    ],
  },
  {
    id: '3',
    user: {
      id: '3',
      name: 'user3',
      profileImage: require('../assets/img/profile3.jpeg'),
    },
    content: 'content test3',
    likeCount: 0,
    imageUrls: [
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
    ],
    comments: [],
  },
  {
    id: '4',
    user: {
      id: '3',
      name: 'user3',
      profileImage: require('../assets/img/default_profile.png'),
    },
    content: 'content test4',
    likeCount: 100,
    imageUrls: [
      'https://source.unsplash.com/random',
      'https://source.unsplash.com/random',
    ],
    comments: [
      {
        id: '4',
        user: {
          id: '1',
          name: 'user1',
          profileImage: require('../assets/img/profile1.jpeg'),
        },
        content: 'comment test4',
      },
      {
        id: '5',
        user: {
          id: '2',
          name: 'user2',
          profileImage: require('../assets/img/profile2.jpeg'),
        },
        content: 'comment tes5',
      },
    ],
  },
];

const videoPosts = [
  {
    id: '1',
    title: 'test1',
    content:
      'test contentㅇㄹdfdfdfdfdfdfdfdfafsdfasdfasdfasdfasdfadsfgfgfgfgfgfgfgfgfgfgfgfgdㅇㄹㅇ',
    uri: '',
    user: {
      id: '1',
      name: 'username1',
      profileImage: require('../assets/img/profile1.jpeg'),
    },
  },
  {
    id: '2',
    title: 'test2',
    content: 'test content2dfdfdfdfdfdfdfdfdf',
    uri: '',
    user: {
      id: '2',
      name: 'username2',
      profileImage: require('../assets/img/profile2.jpeg'),
    },
  },
  {
    id: '3',
    title: 'test3',
    content: 'test contentdfddfdfdfdddd3',
    uri: '',
    user: {
      id: '3',
      name: 'username3',
      profileImage: require('../assets/img/profile3.jpeg'),
    },
  },
  {
    id: '4',
    title: 'test4',
    content: 'test content4',
    uri: '',
    user: {
      id: '4',
      name: 'username4',
      profileImage: require('../assets/img/profile4.jpeg'),
    },
  },
];
export {posts, videoPosts};
