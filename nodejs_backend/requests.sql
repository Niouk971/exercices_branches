CREATE TABLE menus (
  id SERIAL PRIMARY KEY,
  plate TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL,
  item_price DECIMAL
  );

-- DROP TABLE IF EXISTS menus
-- CASCADE;

CREATE TABLE restaurant (
  id SERIAL PRIMARY KEY,
  restaurant_name TEXT NOT NULL,
  restaurant_location TEXT NOT NULL,
  restaurant_contacts TEXT NOT NULL,
  siret_number BIGINT NOT NULL,
  menu_id INT REFERENCES menus(id)
  );

CREATE TABLE ticket (
  id SERIAL PRIMARY KEY,
  welcome_message TEXT NOT NULL,
  menu_id INT REFERENCES menus(id)
  );

CREATE TABLE receipt (
  id SERIAL PRIMARY KEY,
  bank_name TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL,
  ticket_id INT REFERENCES ticket(id)
  );

CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  receipt_id INT REFERENCES receipt(id)
  );

-- DROP TABLE IF EXISTS customers
-- CASCADE;


CREATE TABLE account (
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  password UUID NOT NULL,
  address TEXT NULL,
  zipcode INT NULL,
  fidelity_id INT NOT NULL,
  points INT NOT NULL,
  created_at DATE NOT NULL,
  updated_at DATE NULL
  );


ALTER TABLE customers
ADD COLUMN account_id INT;

ALTER TABLE customers
ADD CONSTRAINT fk_customers_account
FOREIGN KEY (account_id)
REFERENCES account(id);


CREATE TABLE orders_history (
  id SERIAL PRIMARY KEY,
  status TEXT NOT NULL,
  created_at TIMESTAMP,
  receipt_id INT REFERENCES receipt(id),
  account_id INT REFERENCES account(id)
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  rating INT NOT NULL,
  comment TEXT NULL,
  created_at TIMESTAMP,
  customer_id INT REFERENCES receipt(id),
  menu_id INT REFERENCES account(id),
  receipt_id INT REFERENCES receipt(id)
);

CREATE TABLE stock (
  id SERIAL PRIMARY KEY,
  quantity INT NOT NULL,
  products INT NOT NULL
);

CREATE TABLE suppliers (
  id SERIAL PRIMARY KEY,
  company_name TEXT NOT NULL,
  contacts TEXT NOT NULL
);

ALTER TABLE restaurant
ADD COLUMN stock_id INT,
ADD COLUMN supplier_id INT;


ALTER TABLE restaurant

ADD CONSTRAINT fk_restaurant_stock
FOREIGN KEY (stock_id)
REFERENCES stock(id),

ADD CONSTRAINT fk_restaurant_suppliers
FOREIGN KEY (supplier_id)
REFERENCES suppliers(id);


INSERT INTO menus (plate, description, image) VALUES
('Hello World Burger', 'Un cheeseburger classique (pain, steak, fromage, salade, sauce).', '🍔'),
('404 Not Found Fries', 'Des frites maison avec une sauce mystère (choisie aléatoirement par le backend !).', '🍟'),
('JSON Nuggets', 'Nuggets de poulet avec 3 sauces au choix (ketchup, mayo, barbecue).', '🍗'),
('Git Pull Tacos', 'Un taco simple avec poulet, salade, fromage et sauce.', '🌮'),
('Front-end Salad', 'Une salade légère avec tomates, feta et vinaigrette maison.', '🥗'),
('Back-End Brownie', 'Un brownie moelleux au chocolat.', '🍫'),
('Full Stack Menu', 'Un combo burger, frites et boisson.', '🥗');