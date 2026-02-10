<!DOCTYPE html>
<html>
<head>
  <title>Photo Upload</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<h1>Upload a Photo</h1>

<input type="file" id="photo">
<button onclick="uploadPhoto()">Upload</button>

<div id="gallery"></div>

<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js"></script>

<script src="script.js"></script>
</body>
</html>
