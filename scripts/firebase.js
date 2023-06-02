// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getDatabase, ref, get, set, onValue } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js';
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
const dbRef = ref(database);



get(dbRef)
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
            throw new Error('item not found');
        }
    }).catch((error) => {
        console.error(error);
        throw error;
    })
}

onValue(dbRef, (data) => {
  const allItems = [];

  if (data.exists()) {
    const payload = data.val().items
    for (let item in payload) {
      allItems.push(payload[item]);
    }
    const cartItems = allItems.filter((item) => {
      return item.inCart === true;
    })
    const regItems = allItems.filter((item) => {
      return item.inCart === false;
    }) 

  }
})
