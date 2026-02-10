import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  // 🔥 PASTE YOUR CONFIG HERE
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

window.uploadPhoto = async function () {
  const file = document.getElementById("photo").files[0];
  if (!file) return alert("Select a photo");

  const storageRef = ref(storage, "images/" + file.name);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);
  await addDoc(collection(db, "photos"), { url });

  loadGallery();
};

async function loadGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "photos"));
  querySnapshot.forEach((doc) => {
    const img = document.createElement("img");
    img.src = doc.data().url;
    gallery.appendChild(img);
  });
}

loadGallery();
