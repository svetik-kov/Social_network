export type PostsType = {
    id: number
    message: string
    likeCounter: number
}
export type MessageType = {
    id?: number
    message: string
}
export type DialogItemsType = {
    name: string
    id: number
}
export type profilePageType = {
    posts: PostsType[]
    newPostText: string

}
export type messagesPageType = {
    dialogs: DialogItemsType[]
    messages: MessageType[]
}
export type StateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
  /*  addPost: () => void
    updateNewPostText: (newText: string) => void*/
    subscribe: (observer: () => void) => void
    dispatch:(action:ActionTypes)=>void
}

export type AddPostActiveType={
    type:'ADD-POST'
}
export type UpdateNewPostTextActiveType={
    type:'UPDATE-NEW=POST-TEXT'
    newText:string
}
export type ActionTypes=AddPostActiveType|UpdateNewPostTextActiveType
export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello!!!how are you?', likeCounter: 15},
                {id: 2, message: 'It is my first message.', likeCounter: 10},
                {id: 3, message: 'It is nice!', likeCounter: 150},
            ],
            newPostText: ''

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Svetlana'},
                {id: 2, name: 'Nina'},
                {id: 3, name: 'Dima'},
                {id: 4, name: 'Nadya'},
                {id: 5, name: 'Olia'},
                {id: 6, name: 'Marina'},
            ],
            messages: [
                {id: 1, message: 'Hi!!!'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'You are welcome!!!'},
            ]
        }
    },
    _callSubscriber()      {
        console.log('State changed')
    },
    getState(){
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    // addPost() {
    //     let newPost: PostsType = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likeCounter: 0
    //     }
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this._callSubscriber()
    // },
  /*  updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },*/
    dispatch(action){
        if(action.type==='ADD-POST'){
            let newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounter: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else{
            if (action.type==='UPDATE-NEW=POST-TEXT'){
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber()
            }
        }
    }
}

export const addPostActionCreator=():AddPostActiveType=>{
    return {
        type:'ADD-POST'
    }
}
export const UpdateNewPostTextActiveCreator=(text:string):UpdateNewPostTextActiveType=>{
    return {type:'UPDATE-NEW=POST-TEXT', newText:text}
}
/*let rerenderEntireTree=()=>{
    console.log('State changed')
}*/
// export const state:StateType={
//     profilePage:{
//         posts:[
//             {id:1, message:'Hello!!!how are you?',likeCounter:15},
//             {id:2, message:'It is my first message.', likeCounter:10},
//             {id:3, message:'It is nice!', likeCounter:150},
//         ],
//         newPostText:''
//
//     },
//     dialogsPage:{
//       dialogs : [
//           {id: 1, name: 'Svetlana'},
//           {id: 2, name: 'Nina'},
//           {id: 3, name: 'Dima'},
//           {id: 4, name: 'Nadya'},
//           {id: 5, name: 'Olia'},
//           {id: 6, name: 'Marina'},
//       ],
//       messages : [
//           {id: 1, message: 'Hi!!!'},
//           {id: 2, message: 'How are you?'},
//           {id: 3, message: 'You are welcome!!!'},
//       ]
//   }
// }

/*export const addPost=()=>{
    let newPost:PostsType={
        id:5,
        message:state.profilePage.newPostText,
        likeCounter:0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText=''
    rerenderEntireTree()
}*/
/*export const updateNewPostText=(newText:string)=>{
    state.profilePage.newPostText=newText
    rerenderEntireTree()
}
export const subscribe=(observer:()=>void)=>{
    rerenderEntireTree=observer
}*/
