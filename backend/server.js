const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// In-memory product catalogue
const products = [
  {
    id: 1,
    title: 'Sample Product 1',
    price: 9.99,
    image: 'https://placehold.co/300x200?text=Prod+1',
    images: [
      'https://placehold.co/600x400?text=Prod+1+-+Image+1',
      'https://placehold.co/600x400?text=Prod+1+-+Image+2',
      'https://placehold.co/600x400?text=Prod+1+-+Image+3'
    ],
    description: 'Description for product 1.',
    stock: 5
  },
  {
    id: 2,
    title: 'Sample Product 2',
    price: 14.99,
    image: 'https://placehold.co/300x200?text=Prod+2',
    images: [
      'https://placehold.co/600x400?text=Prod+2+-+Image+1',
      'https://placehold.co/600x400?text=Prod+2+-+Image+2',
      'https://placehold.co/600x400?text=Prod+2+-+Image+3'
    ],
    description: 'Description for product 2.',
    stock: 8
  },
  {
    id: 3,
    title: 'Sample Product 3',
    price: 19.99,
    image: 'https://placehold.co/300x200?text=Prod+3',
    images: [
      'https://placehold.co/600x400?text=Prod+3+-+Image+1',
      'https://placehold.co/600x400?text=Prod+3+-+Image+2',
      'https://placehold.co/600x400?text=Prod+3+-+Image+3'
    ],
    description: 'Description for product 3.',
    stock: 3
  },
  {
    id: 4,
    title: 'Sample Product 4',
    price: 29.99,
    image: 'https://placehold.co/300x200?text=Prod+4',
    images: [
      'https://placehold.co/600x400?text=Prod+4+-+Image+1',
      'https://placehold.co/600x400?text=Prod+4+-+Image+2',
      'https://placehold.co/600x400?text=Prod+4+-+Image+3'
    ],
    description: 'Description for product 4.',
    stock: 10
  }
];

let cart = [];

// Products endpoints
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Cart endpoints
app.get('/api/cart', (req, res) => {
  res.json(cart);
});

app.post('/api/cart', (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);
  if (!product) {
    res.status(400).json({ message: 'Invalid product' });
    return;
  }
  const existing = cart.find(i => i.product.id === productId);
  if (existing) {
    existing.quantity = Math.min(existing.quantity + (quantity || 1), product.stock);
  } else {
    cart.push({ product, quantity: Math.min(quantity || 1, product.stock) });
  }
  res.json(cart);
});

app.put('/api/cart/:id', (req, res) => {
  const id = Number(req.params.id);
  const { quantity } = req.body;
  const item = cart.find(i => i.product.id === id);
  if (!item) {
    res.status(404).json({ message: 'Item not in cart' });
    return;
  }
  item.quantity = Math.min(Math.max(quantity, 1), item.product.stock);
  res.json(cart);
});

app.delete('/api/cart/:id', (req, res) => {
  const id = Number(req.params.id);
  cart = cart.filter(i => i.product.id !== id);
  res.json(cart);
});

// Checkout endpoint
app.post('/api/checkout', (req, res) => {
  const { name, address } = req.body;
  if (!cart.length) {
    res.status(400).json({ message: 'Cart is empty' });
    return;
  }
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const order = { id: Date.now(), name, address, items: cart, total };
  // Clear cart after checkout
  cart = [];
  res.json({ message: 'Order placed successfully', order });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API server listening on port ${PORT}`);
});
