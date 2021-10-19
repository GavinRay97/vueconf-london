INSERT INTO "user"
  (email, password)
VALUES
  ('user1@example.com', 'password1'),
  ('user2@example.com', 'password2'),
  ('user3@example.com', 'password3');

INSERT INTO meetup
  (location, name, description, image_url, datetime)
VALUES
  ('London', 'Vue.js London', 'A breathtaking description here', 'https://via.placeholder.com/140x100.png?text=Vue+London', now()),
  ('Miami', 'Miami: Something on the beach (probably)', 'Doing beach things, at the beach', 'https://via.placeholder.com/140x100.png?text=Miami+Beach', now());

INSERT INTO meetup_user
  (user_id, meetup_id)
VALUES
  (1, 1),
  (2, 1),
  (3, 1),
  (2, 2);

INSERT INTO meetup_comment
  (user_id, meetup_id, text)
VALUES
  (1, 1, 'This is gonna be great!'),
  (2, 1, 'Vue is bae'),
  (3, 1, 'I love React! Wait, am I in the wrong place?'),
  (2, 2, 'I hope we are doing beach stuff at this meetup');
