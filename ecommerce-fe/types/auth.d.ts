interface User {
    id: string;
    username: string;
    email: string;
    role: "user" | "vendor" | "admin";
}

interface Auth {
    loggedIn: boolean;
    user: User | null;
    login: (credentials: {
        username: string;
        password: string;
    }) => Promise<void>;
    logout: () => Promise<void>;
    fetchUser: () => Promise<void>;
}

declare module "#app" {
    interface NuxtApp {
        $auth: Auth;
    }
}

declare module "@vue/runtime-core" {
    interface ComponentCustomProperties {
        $auth: Auth;
    }
}
