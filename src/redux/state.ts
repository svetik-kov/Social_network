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

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'
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
        }
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
        if (action.type === ADD_POST) {
            let newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounter: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber()
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: 4, message: body})
        }
    }

}


export const addPostActionCreator = (): AddPostActiveType => ({type: ADD_POST})
export const UpdateNewPostTextActiveCreator = (text: string): UpdateNewPostTextActiveType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const UpdateNewMessageBodyActiveCreator = (text: string): UpdateNewMessageBodyActiveType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
})
export const sendMessageActionCreator = (): UpdateSendBodyActiveType => ({type: "SEND-MESSAGE"})