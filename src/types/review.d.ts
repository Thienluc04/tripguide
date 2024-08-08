interface Author {
  name: string;
  avatar: string;
  address: string;
}

interface Review {
  _id?: string;
  parent_id: string;
  rating: number;
  content: string;
  author: Author;
  created_at?: Date;
}

interface Feature {
  _id?: string;
  parent_id: string;
  name: string;
  icon: string;
}
