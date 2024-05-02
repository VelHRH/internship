type SocialLinks = string[];

type Profile = {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLinks;
};

export type { Profile, SocialLinks };
