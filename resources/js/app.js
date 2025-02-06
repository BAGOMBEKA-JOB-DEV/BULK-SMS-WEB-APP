// Import the Vue.js library
import { createApp } from 'vue';
import axios from 'axios';

// Import Bootstrap's CSS and JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Import your main application component and router
import App from './components/MainComponent.vue'; // Your main component that includes the navbar

import router from './router'; // Import the router configuration

// Create a new Vue application instance
const app = createApp(App);

// Register the router
app.use(router);

// Mount the application to the HTML element with id 'app'
app.mount('#app');



const express = require('express');
const cors = require('cors');
const hello = express();

// Allow all origins (or specify your frontend URL)
hello.use(cors({
    origin: 'http://127.0.0.1:8000', // or use '*' to allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Your other server setup...
hello.post('/users', (req, res) => {
  // Handle the POST request here
});

hello.listen(3000, () => {
  console.log('Server running on port 3000');
});

