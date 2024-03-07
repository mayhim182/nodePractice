

const socket = io('http://localhost:8000');
const form = document.getElementById("send-container");
const messageInput = document.getElementById('messageInput');
const messageContainer = document.querySelector('.container');