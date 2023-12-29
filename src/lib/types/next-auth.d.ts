import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      password: string;
      created_at: string;
      updated_at: string;
      token: string;
    };
  }
}
