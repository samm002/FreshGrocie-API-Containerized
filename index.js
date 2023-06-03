const express = require('express');
const Firestore = require('@google-cloud/firestore')

const db = new Firestore();
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`freshGrocie Rest API listening on port ${port}`);
});

app.get('/', async (req, res) => {
    res.json({status: 'Fresh Grocie API ready!'});
})

app.get("/users", async (req, res) => {
    const snapshot = await db.collection("users").get();
  
    const users = [];
    snapshot.forEach((doc) => {
      const id = doc.id;
      const data = doc.data();
  
      users.push({id, ...data});
    });
    res.status(200).send(JSON.stringify(users));
  });

  app.get("/stores", async (req, res) => {
  const snapshot = await db.collection("stores").get();

  const stores = [];
  snapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();

    stores.push({ id, ...data });
  });
  res.status(200).send(JSON.stringify(stores));
});

app.get("/products", async (req, res) => {
  const snapshot = await db.collection("products").get();

  const products = [];
  snapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();

    products.push({ id, ...data });
  });
  res.status(200).send(JSON.stringify(products));
});

app.get("/transactions", async (req, res) => {
  const snapshot = await db.collection("transactions").get();

  const transactions = [];
  snapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();

    transactions.push({ id, ...data });
  });
  res.status(200).send(JSON.stringify(transactions));
});

app.get("/user/:id", async (req, res) => {
  const snapshot = await db.collection("users").doc(req.params.id).get();

  const userId = snapshot.id;
  const userData = snapshot.data();

  res.status(200).send(JSON.stringify({ id: userId, ...userData }));
});

app.get("/store/:id", async (req, res) => {
  const snapshot = await db.collection("stores").doc(req.params.id).get();

  const userId = snapshot.id;
  const userData = snapshot.data();

  res.status(200).send(JSON.stringify({ id: userId, ...userData }));
});

app.get("/product/:id", async (req, res) => {
  const snapshot = await db.collection("products").doc(req.params.id).get();

  const userId = snapshot.id;
  const userData = snapshot.data();

  res.status(200).send(JSON.stringify({ id: userId, ...userData }));
});

app.get("/transaction/:id", async (req, res) => {
  const snapshot = await db.collection("transactions").doc(req.params.id).get();

  const userId = snapshot.id;
  const userData = snapshot.data();

  res.status(200).send(JSON.stringify({ id: userId, ...userData }));
});

app.post("/user", async (req, res) => {
  const user = req.body;

  await db.collection("users").add(user);

  res.status(201).send();
});

app.post("/store", async (req, res) => {
  const store = req.body;

  await db.collection("stores").add(store);

  res.status(201).send();
});

app.post("/product", async (req, res) => {
  const product = req.body;

  await db.collection("products").add(product);

  res.status(201).send();
});

app.post("/transaction", async (req, res) => {
  const transaction = req.body;

  await db.collection("transactions").add(transaction);

  res.status(201).send();
});

app.put("/user/:id", async (req, res) => {
  const body = req.body;

  await db.collection("users").doc(req.params.id).update(body);

  res.status(200).send();
});

app.put("/store/:id", async (req, res) => {
  const body = req.body;

  await db.collection("stores").doc(req.params.id).update(body);

  res.status(200).send();
});

app.put("/product/:id", async (req, res) => {
  const body = req.body;

  await db.collection("products").doc(req.params.id).update(body);

  res.status(200).send();
});

app.put("/transaction/:id", async (req, res) => {
  const body = req.body;

  await db.collection("transactions").doc(req.params.id).update(body);

  res.status(200).send();
});

app.delete("/user/:id", async (req, res) => {
  await admin.firestore().collection("users").doc(req.params.id).delete();

  res.status(200).send();
});

app.delete("/store/:id", async (req, res) => {
  await admin.firestore().collection("stores").doc(req.params.id).delete();

  res.status(200).send();
});

app.delete("/product/:id", async (req, res) => {
  await admin.firestore().collection("products").doc(req.params.id).delete();

  res.status(200).send();
});

app.delete("/transaction/:id", async (req, res) => {
  await admin.firestore().collection("transaction").doc(req.params.id).delete();

  res.status(200).send();
});
