import TYPES from './actionTypes';

export const productsInitialState = {
  products: [
    { id: 1, name: 'iPhone 15 Pro Max', price: 599520, image: 'image_url' },
    { id: 2, name: 'Samsung Galaxy S23 Ultra', price: 623520, image: 'image_url' },
    
  ],
  cart: [],
  totalPriceShoppingCart: 0,
};

export const reducerCart = (state, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload], 
      };
    }
    case TYPES.DELETE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };
    }
    case TYPES.DELETE_ALL_FROM_CART: {
      return productsInitialState;
    }
    case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART: {
      return {
        ...state,
        totalPriceShoppingCart: state.cart.reduce(
          (previousValue, product) => previousValue + product.price,
          0
        ),
      };
    }
    default:
      return state;
  }

  throw Error('Unknown action: ' + action.type);
};
