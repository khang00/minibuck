const post = {
  image: '',
  title: 'The title',
  subTitle: 'some thing longer than the title',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua.`,
  postOwnerName: 'Khang Dang',
  postOwnerAvatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png'
}

const images = [
  'https://i.pinimg.com/564x/c0/e6/8f/c0e68fb0427194738cb3d0b47c93e678.jpg',
  'https://i.pinimg.com/originals/66/2a/30/662a30b2f33056eed6a716bbc175100d.jpg',
  'https://i.pinimg.com/564x/47/58/84/475884753c8bef2afd6dd48849e69af0.jpg',
  'https://i.pinimg.com/564x/e7/e9/2a/e7e92a0d78340b5a73dfac82a92c9f9b.jpg',
  'https://i.pinimg.com/originals/27/19/cf/2719cfb518e02c269316d7d5050c21ea.jpg',
  'https://i.pinimg.com/564x/5a/cd/73/5acd73f290123a47e10ef73624083701.jpg',
  'https://cdn.vuetifyjs.com/images/cards/store.jpg',
  'https://i.pinimg.com/564x/e7/d8/b0/e7d8b0c71dab26a1901d061bbe1728eb.jpg',
  'https://i.imgur.com/gxZU0eS.jpg',
  'https://i.pinimg.com/564x/3f/88/f5/3f88f5a12cedc5c26025053886f7b856.jpg',
  'https://i.pinimg.com/originals/90/7f/52/907f528cb5329c23547b8f6d2a277663.jpg',
  'https://i.pinimg.com/564x/cb/47/00/cb4700c38556f6e65d2400862b54db78.jpg',
  'https://i.pinimg.com/originals/9f/1d/d3/9f1dd328d0b820acffefafdfcc687e5e.jpg',
  'https://i.pinimg.com/originals/27/12/9f/27129f47dd0941f3ac44a2aa6d859ff0.jpg',
  'https://i.pinimg.com/originals/76/dd/f1/76ddf15c4dfafbf7ddbe6709f3c5042c.jpg',
  'https://i.pinimg.com/originals/bb/39/47/bb3947b75c946aec3ced1bf5c4ba077d.jpg',
  'https://i.pinimg.com/originals/ec/71/52/ec7152877f6db8b6ce5582e8e316c209.jpg',
  'https://i.pinimg.com/originals/cc/d9/21/ccd9219a4e8e1ff58512cb193bc777be.png',
  'https://i.pinimg.com/originals/6f/96/cd/6f96cdce74a88613a36b2ed91a028ab6.jpg',
  'https://i.pinimg.com/originals/b7/7d/96/b77d962fc9f9b5b1b6cd1685542ed0c5.jpg',
  'https://i.pinimg.com/originals/d4/8d/29/d48d2906f7c8f9c8761849642d5e7a2b.jpg',
  'https://i.pinimg.com/originals/8c/5f/d1/8c5fd17d867e0114316547b8f37cf2db.jpg',
  'https://i.pinimg.com/564x/a0/87/4b/a0874b027bfb2650dd9e47a1ddefb69e.jpg',
  'https://i.pinimg.com/originals/80/95/7c/80957c97d031a755dee09c2c0ed20093.jpg',
  'https://i.pinimg.com/236x/51/cf/af/51cfaf3465d5bbea86acabe9cfcab1ce.jpg',
  'https://i.pinimg.com/236x/55/61/e0/5561e0a70a4e9962b53152586d1df9c5.jpg',
  'https://i.pinimg.com/236x/b1/74/82/b17482b2491b5eeb72e9779a494c1b1d.jpg',
  'https://i.pinimg.com/236x/24/ff/06/24ff0645ad046367144401328241261c.jpg',
  'https://cdn.vuetifyjs.com/images/cards/store.jpg',
  'https://i.pinimg.com/236x/91/56/08/9156088187b35e55559905b3e5d56a81.jpg',
  'https://i.pinimg.com/236x/24/ff/06/24ff0645ad046367144401328241261c.jpg',
  'https://i.pinimg.com/236x/b1/74/82/b17482b2491b5eeb72e9779a494c1b1d.jpg',
  'https://i.pinimg.com/originals/9f/1d/d3/9f1dd328d0b820acffefafdfcc687e5e.jpg',
  'https://i.imgur.com/gxZU0eS.jpg'
]

function computePosts () {
  const posts = []

  images.forEach((image) => {
    const newPost = { ...post }
    newPost.image = image
    posts.push(newPost)
  })

  return posts
}

export default computePosts
