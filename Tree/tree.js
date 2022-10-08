const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'c',
          children: [
            {
              val: 'd',
              children: [],
            },
          ],
        },
      ],
    },
    {
      val: 'e',
      children: [
        {
          val: 'f',
          children: [],
        },
        {
          val: 'g',
          children: [
            {
              val: 'h',
              children: [],
            },
          ],
        },
        {
          val: 'i',
          children: [],
        },
      ],
    },
  ],
};

module.exports = tree;
