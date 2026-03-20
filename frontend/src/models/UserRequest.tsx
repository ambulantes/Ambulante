export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    username: string;
    password: string;
    confirm_password: string;
}

export interface EditProfileRequest {
    username: string;
    image_url: string;
    description: string;
    location: string;
    sellerType: 'fixed' | 'mobile';
    activeDays: string [];
    scheduleFrom: string; 
    scheduleTo: string;
}