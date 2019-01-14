export interface IMenuLink {
  text: string;
  url: string;
  homeAnchor: string;
}

export interface ISocialProfile {
  type: 'email' | 'twitter' | 'googleScholar' | 'github';
  url: string;
}

export interface ISiteConfig {
  title?: string;
  author?: string;
  email?: string;
  description?: string;
  portraitImage: string;
  theme?: {
    header?: {
      backgroundColor?: string;
      isDarkBackground?: boolean;
    };
  };
  mainMenu?: {
    showSearch?: boolean;
    links: IMenuLink[];
  };
  socialProfiles?: ISocialProfile[];
}
