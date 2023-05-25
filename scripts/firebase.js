// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, get, set } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDuGObqYZv--xC-pwmo_OZtQ6OAkbXiFpg",
authDomain: "novas-database.firebaseapp.com",
databaseURL: "https://novas-database-default-rtdb.firebaseio.com",
projectId: "novas-database",
storageBucket: "novas-database.appspot.com",
messagingSenderId: "889221898217",
appId: "1:889221898217:web:1dd6b4eac8047e40d57578"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const items = {
    item1: {
        image: "./assets/prod-1.jpg",
        name: 'Malm Chair',
        price: 22,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
    },
    item2: {
        image: "./assets/prod-2.jpg",
        name: 'Pendant Lamp',
        price: 45,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
    },
    item3: {
        image: "./assets/prod-3.jpg",
        name: "Magnolia Dream",
        price: 18,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
    },
    item4: {
        image: "./assets/prod-4.jpg",
        name: 'Malm Chair',
        price: 45,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
    },
    item5: {
        image: "./assets/prod-5.jpg",
        name: 'Pendant Lamp',
        price: 45,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
    },
    item6: {
        image: "./assets/prod-6.jpg",
        name: 'Candle',
        price: 45,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
    },
    item7: {
        image: "./assets/prod-7.jpg",
        name: 'Lorem Ipsum',
        price: 45,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
    },
    item8: {
        image: "./assets/prod-8.jpg",
        name: 'Pendant Lamp',
        price: 45,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
    },
    item9: {
        image: "./assets/prod-9.jpg",
        name: 'Malm Chair',
        price: 45,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
    },
    item10: {
        image: "./assets/prod-10.jpg",
        name: 'Pendant Lamp',
        price: 45,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum velit ullam temporibus quo animi at consectetur saepe esse sint."
    }
};

set(ref(database, 'items'), items)
  .then(() => {
    console.log('Items saved successfully!');
  })
  .catch((error) => {
    console.log('Error saving items:', error);
  });

export function fetchItemData(itemId) {
    const itemRef = ref(database, `items/` + itemId);

    return get(itemRef).then((snapshot) => {
        if (snapshot.exists()) {
            const itemData = snapshot.val();
            return itemData;
        } else {
            throw new Error('item note found');
        }
    }).catch((error) => {
        console.error(error);
        throw error;
    })
}