INSERT INTO categories (name, slug, parent_id, is_active, user_id)
VALUES
  ('Ply Decor', 'ply-decor', NULL, TRUE),
  ('Flower Pot', 'flower-pot', NULL, TRUE),
  ('Lighting', 'lighting', NULL, TRUE);



INSERT INTO products (category_id, name, slug, description, selling_price, mrp_price, stock, is_active, tag)
VALUES
-- Ply Decor (category_id = 1)
(1, 'Ply Wall Panel', 'ply-wall-panel', 'High quality plywood wall panel.', 49.99, 59.99, 50, TRUE, 'ply-decor'),
(1, 'Ply Coffee Table', 'ply-coffee-table', 'Modern ply coffee table.', 79.99, 99.99, 30, TRUE, 'ply-decor'),
(1, 'Ply Bookshelf', 'ply-bookshelf', 'Spacious ply bookshelf.', 129.99, 149.99, 20, TRUE, 'ply-decor'),
(1, 'Ply Chair', 'ply-chair', 'Comfortable ply chair.', 59.99, 69.99, 40, TRUE, 'ply-decor'),

-- Flower Pot (category_id = 2)
(2, 'Ceramic Flower Pot', 'ceramic-flower-pot', 'Elegant ceramic flower pot.', 19.99, 24.99, 100, TRUE, 'flower-pot'),
(2, 'Terracotta Pot', 'terracotta-pot', 'Traditional terracotta pot.', 14.99, 19.99, 80, TRUE, 'flower-pot'),
(2, 'Hanging Flower Pot', 'hanging-flower-pot', 'Decorative hanging flower pot.', 24.99, 29.99, 60, TRUE, 'flower-pot'),
(2, 'Self-Watering Pot', 'self-watering-pot', 'Modern self-watering flower pot.', 29.99, 34.99, 50, TRUE, 'flower-pot'),

-- Lighting (category_id = 3)
(3, 'LED Desk Lamp', 'led-desk-lamp', 'Adjustable LED desk lamp.', 39.99, 49.99, 70, TRUE, 'lighting'),
(3, 'Hanging Pendant Light', 'hanging-pendant-light', 'Stylish pendant light for living room.', 89.99, 99.99, 30, TRUE, 'lighting'),
(3, 'Wall Sconce Light', 'wall-sconce-light', 'Decorative wall sconce light.', 49.99, 59.99, 40, TRUE, 'lighting'),
(3, 'Floor Lamp', 'floor-lamp', 'Modern floor lamp with dimmer.', 99.99, 119.99, 20, TRUE, 'lighting');
