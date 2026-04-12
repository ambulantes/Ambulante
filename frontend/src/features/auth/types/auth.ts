export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
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