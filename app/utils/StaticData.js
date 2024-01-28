import Icon, {Icons} from './icons';
import {appColors} from './appColors';
import {
  BLACK_T_SHIRT,
  DSLR,
  HEAD_PHONE,
  LAPTOP_BAG,
  RED_SHOE,
  SHOE_FOR_MEN,
} from '../assests';
export const productTypes = [
  {
    id: 1,
    name: 'Popular',
    iconName: 'star',
    iconType: Icons?.AntDesign,
    color: appColors?.black,
  },
  {
    id: 2,
    name: 'Clothes',
    iconName: 'shirt-sharp',
    iconType: Icons?.Ionicons,
    color: appColors?.black,
  },
  {
    id: 3,
    name: 'Shoes',
    iconName: 'shoe-sneaker',
    iconType: Icons?.MaterialCommunityIcons,
    color: appColors?.black,
  },
  {
    id: 4,
    name: 'Bags',
    iconName: 'bag',
    iconType: Icons?.Ionicons,
    color: appColors?.black,
  },
  {
    id: 5,
    name: 'Watch',
    iconName: 'watch',
    iconType: Icons?.MaterialIcons,
    color: appColors?.black,
  },
];

export const productList = [
  {
    id: 1,
    title: 'Tripod DSLR Camera',
    price: '$899',
    image: DSLR,
    offerPtg: '-20%',
    rating: '4.9 (1299)',
  },
  {
    id: 2,
    title: 'Casual Black T-shirt',
    price: '$620',
    image: BLACK_T_SHIRT,
    offerPtg: '-20%',
    rating: '4.8 (1089)',
  },
  {
    id: 3,
    title: 'Flyknit Shoe for Men',
    price: '$299',
    image: SHOE_FOR_MEN,
    offerPtg: '-20%',
    rating: '4.9 (199)',
  },
  {
    id: 4,
    title: 'Sony Black H11999 Headphone',
    price: '$699',
    image: HEAD_PHONE,
    offerPtg: '-20%',
    rating: '4.9 (1299)',
  },
  {
    id: 5,
    title: 'Laptop Bag',
    price: '$899',
    image: LAPTOP_BAG,
    offerPtg: '-20%',
    rating: '4.9 (11299)',
  },
];
export const trendingNowList = [
  {
    id: 1,
    title: 'Red Color Casual Shoe',
    description: '102K People wants this item',
    image: RED_SHOE,
  },
  {
    id: 2,
    title: 'Sony Black H11999 Headphone',
    description: '102K People wants this item',
    image: HEAD_PHONE,
  },
  {
    id: 3,
    title: 'Laptop Bag',
    description: '102K People wants this item',
    image: LAPTOP_BAG,
  },
  {
    id: 4,
    title: 'Tripod DSLR Camera',
    description: '102K People wants this item',
    image: DSLR,
  },
  {
    id: 5,
    title: 'Casual Black T-shirt',
    description: '102K People wants this item',
    image: BLACK_T_SHIRT,
  },

  {
    id: 6,
    title: 'Flyknit Shoe for Men',
    description: '102K People wants this item',
    image: SHOE_FOR_MEN,
  },
];
