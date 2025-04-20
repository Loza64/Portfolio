
export interface Service {
    icon: String,
    title: String,
    text: String
}

export interface About {
    date: String,
    description: String,
}

//Interface to rest api
export interface ResponseRest<T> {
    state: boolean;
    message: string;
    result: T | null;
}

export interface Project {
    title: String,
    description: String,
    image: {
        public_id: String,
        url: String
    },
    url: String
}

export interface Technical {
    name: string,
    type: string,
    percentage: number,
    image: {
        public_id: String,
        url: String
    }
}

export interface Professional {
    name: String,
    percentage: number
}

export interface Message {
    name: String,
    lastname: String,
    phone: String,
    email: String,
    message: String
}