const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const path = require("path");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "TEST-1189474624458086-110522-3fa64bbb47cde85f59d272d1d3cc3791-516691745",
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client")));
app.use(cors());

// Ruta para el index.html
app.get("/", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/shop.html"));
});

// Ruta para el segundo HTML
app.get("/page2", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/nuevos.html"));
});

// Ruta para el tercer HTML
app.get("/page3", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/usados.html"));
});

// Ruta para el cuarto HTML
app.get("/page4", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/camionetas.html"));
});

app.post("/create_preference", (req, res) => {

	let preference = {
		items: [
			{
				title: req.body.description,
				unit_price: Number(req.body.price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:8080",
			"failure": "http://localhost:8080",
			"pending": ""
		},
		auto_return: "approved",
	};

	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});