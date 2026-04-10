export interface HomeProductResponse {
    id: number
    name: string
    price: number
    imgUrl: string

    vendor: UserAvatarResponse
}

export interface UserAvatarResponse {
    id: number
    imgUrl: string
}