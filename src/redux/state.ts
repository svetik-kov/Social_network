
export type PostsType={
    id:number
    message:string
    likeCounter:number
}
export type MessageType = {
    id?:number
    message: string
}
export type DialogItemsType = {
    name: string
    id: number
}
export type profilePageType={
    posts:PostsType[]

}
export type messagesPageType={
    dialogs:DialogItemsType[]
    messages:MessageType[]
}
 export type StateType={
     profilePage:profilePageType
     dialogsPage:messagesPageType
}

export let state:StateType={
    profilePage:{
        posts:[
            {id:1, message:'Hello!!!how are you?',likeCounter:15},
            {id:2, message:'It is my first message.', likeCounter:10},
            {id:3, message:'It is nice!', likeCounter:150},
        ],

    },
    dialogsPage:{
      dialogs : [
          {id: 1, name: 'Svetlana'},
          {id: 2, name: 'Nina'},
          {id: 3, name: 'Dima'},
          {id: 4, name: 'Nadya'},
          {id: 5, name: 'Olia'},
          {id: 6, name: 'Marina'},
      ],
      messages : [
          {id: 1, message: 'Hi!!!'},
          {id: 2, message: 'How are you?'},
          {id: 3, message: 'You are welcome!!!'},
      ]
  }

}