export const constractAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
    ],
    name: "createPost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_usertodelete",
        type: "address",
      },
    ],
    name: "deleteUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_Postid",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "_Author",
        type: "address",
      },
    ],
    name: "likePost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "likes",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "dislikes",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "shares",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "postid",
        type: "uint16",
      },
    ],
    name: "PostCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
    ],
    name: "signup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllPosts",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "text",
            type: "string",
          },
          {
            internalType: "uint16",
            name: "likes",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "dislikes",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "shares",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "postid",
            type: "uint16",
          },
        ],
        internalType: "struct Wegame.Post[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSignerUsername",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getUserData",
    outputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "followers",
            type: "uint16",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "username",
            type: "string",
          },
          {
            internalType: "uint16",
            name: "following",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "useraddress",
            type: "address",
          },
        ],
        internalType: "struct Wegame.User",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userAddress",
        type: "address",
      },
    ],
    name: "getUserPosts",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "text",
            type: "string",
          },
          {
            internalType: "uint16",
            name: "likes",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "dislikes",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "shares",
            type: "uint16",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "uint16",
            name: "postid",
            type: "uint16",
          },
        ],
        internalType: "struct Wegame.Post[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "users",
    outputs: [
      {
        internalType: "uint16",
        name: "followers",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "username",
        type: "string",
      },
      {
        internalType: "uint16",
        name: "following",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "useraddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "usersaddress",
    outputs: [
      {
        internalType: "uint16",
        name: "followers",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "username",
        type: "string",
      },
      {
        internalType: "uint16",
        name: "following",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "useraddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "usersPosts",
    outputs: [
      {
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        internalType: "uint16",
        name: "likes",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "dislikes",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "shares",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "postid",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
