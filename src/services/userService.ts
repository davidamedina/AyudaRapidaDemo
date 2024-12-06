import { User } from '../types/user';

// In a real application, this would interact with your backend
class UserService {
  private static instance: UserService;
  private users: User[] = [];

  private constructor() {}

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async createUser(userData: User): Promise<User> {
    // In a real app, this would be an API call
    const newUser = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date(),
      verified: false
    };
    
    this.users.push(newUser);
    return newUser;
  }

  async getUsers(filters?: {
    category?: string;
    location?: string;
    query?: string;
  }): Promise<User[]> {
    let filteredUsers = [...this.users];

    if (filters) {
      if (filters.category) {
        filteredUsers = filteredUsers.filter(user => 
          user.categories.includes(filters.category!)
        );
      }

      if (filters.location) {
        filteredUsers = filteredUsers.filter(user => 
          user.location.toLowerCase().includes(filters.location!.toLowerCase())
        );
      }

      if (filters.query) {
        const searchQuery = filters.query.toLowerCase();
        filteredUsers = filteredUsers.filter(user => 
          user.name.toLowerCase().includes(searchQuery) ||
          user.description.toLowerCase().includes(searchQuery) ||
          user.categories.some(cat => cat.toLowerCase().includes(searchQuery))
        );
      }
    }

    return filteredUsers;
  }
}

export default UserService.getInstance();