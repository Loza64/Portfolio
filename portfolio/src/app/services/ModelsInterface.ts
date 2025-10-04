
export interface Service {
    icon: String,
    title: String,
    text: String
}

//Interface to rest api
export interface ResponseRest<T> {
    state: boolean;
    message: string;
    result: T | null;
}

export interface Project {
    _id: string
    title: String,
    description: String,
    image: {
        public_id: String,
        url: String
    },
    links: {
        github: string,
        app: string
    }
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


export interface About {
    date: String,
    title: String,
    description: String,
}


export interface Message {
    name: String,
    lastname: String,
    phone: String,
    email: String,
    message: String
}