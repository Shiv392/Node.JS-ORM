**🧠 What is ORM?**
ORM (Object-Relational Mapping) is a programming technique that allows developers to interact with a database using objects instead of raw SQL queries.
It maps database tables to JavaScript classes, making data handling more intuitive and reducing boilerplate code.

**⚙️ Why Use ORM (like Sequelize) Over Raw SQL?**
1. Abstraction: Write clean, readable JS code instead of long SQL queries.
2. Cross-DB Compatibility: Works with multiple databases (MySQL, PostgreSQL, etc.) without major changes.
3. Data Validation: Built-in model validation and schema definitions.
4. Relationships: Easily define hasOne, belongsTo, hasMany, many-to-many relations.
5. Migrations: Version-controlled schema updates.

✅ Pros
1. Faster development
2. Cleaner and maintainable code
3. Prevents SQL injection
4. Easier to manage complex joins and relations
5. Cross-database support

⚠️ Cons
1. Slight performance overhead vs raw SQL
2. Complex queries can be harder to optimize
3. Abstracted layer may hide DB-specific features

📖 Steps for this repository to follow
1. Go to db_config.js file where we have added all db related configruation like db_name, user_type, db_password and more.
2. Created a new user schema inside the schema folder, this schema will create a new table with all mentioned columns.

