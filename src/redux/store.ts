import profileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";

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
    newMessageBody: string
}
export type StateType = {
    profilePage: profilePageType
    dialogsPage: messagesPageType
    sidebar:{}
}
export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    /*  addPost: () => void
      updateNewPostText: (newText: string) => void*/
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionTypes) => void
}

export type AddPostActiveType = {
    type: 'ADD-POST'
}
export type UpdateNewPostTextActiveType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
export type UpdateNewMessageBodyActiveType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}
export type UpdateSendBodyActiveType = {
    type: 'SEND-MESSAGE'

}
export type ActionTypes =
    AddPostActiveType
    | UpdateNewPostTextActiveType
    | UpdateNewMessageBodyActiveType
    | UpdateSendBodyActiveType



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
            ],
            newMessageBody: ''
        },
        sidebar:{}
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage= profileReducer( this._state.profilePage,action)
        this._state.dialogsPage= DialogsReducer( this._state.dialogsPage,action)
        this._state.sidebar= SidebarReducer( this._state.sidebar,action)
        this._callSubscriber()
    }

}


/*export const addPostActionCreator = (): AddPostActiveType => ({type: ADD_POST})
export const UpdateNewPostTextActiveCreator = (text: string): UpdateNewPostTextActiveType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const UpdateNewMessageBodyActiveCreator = (text: string): UpdateNewMessageBodyActiveType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
})*/
export const sendMessageActionCreator = (): UpdateSendBodyActiveType => ({type: "SEND-MESSAGE"})