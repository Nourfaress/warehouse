export  class Product {
  _id: string;
  name: string;
  description: string;
  richDescription: string;
  price: number;
  image: string;
  images: string;
  brand: string;
  category: string;
  countInStock: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  constructor() {
        this._id = '0';
        this.name = '';
        this.description = '';
        this.richDescription = '';
        this.price = 0.0;
        this.image = '';
        this.images = '';
        this.brand = '';
        this.category = '';
        this.countInStock = 0;
        this.rating = 0;
        this.numReviews = 0;
        this.isFeatured = false;
  }
}
