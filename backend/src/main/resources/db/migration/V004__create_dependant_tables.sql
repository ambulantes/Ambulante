CREATE TABLE favorites (
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    vendor_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,

    CONSTRAINT pk_favorites PRIMARY KEY (user_id, vendor_id)
);

CREATE TYPE delivery_method AS ENUM (
    'MEET_VENDOR',
    'MEET_POINT',
    'DELIVERY'
);

CREATE TYPE order_status AS ENUM (
    'PENDING',
    'ACCEPTED',
    'IN_TRANSIT',
    'FINISHED',
    'CANCELLED'
);

CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id),
    vendor_id BIGINT NOT NULL REFERENCES users(id),
    location_id BIGINT REFERENCES locations(id) ON DELETE SET NULL,
    status order_status NOT NULL DEFAULT 'PENDING',
    custom_latitude DECIMAL(9, 6),
    custom_longitude DECIMAL(9, 6),
    delivery_method delivery_method NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),

    CHECK (user_id != vendor_id),

    CONSTRAINT check_location_or_coords CHECK (
        location_id IS NOT NULL
        OR (custom_latitude IS NOT NULL AND custom_longitude IS NOT NULL)
    )
);

CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    vendor_id BIGINT NOT NULL REFERENCES users(id),
    category_id BIGINT REFERENCES categories(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    details TEXT,
    price DECIMAL(10, 2) NOT NULL,
    img_url VARCHAR(255),
    stock INTEGER DEFAULT 0 CHECK (stock >= 0),
    is_active BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE order_items (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGINT NOT NULL REFERENCES orders(id),
    product_id BIGINT NOT NULL REFERENCES products(id),
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT NOW(),

    UNIQUE (order_id, product_id)
);

CREATE TABLE reviews (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id),
    vendor_id BIGINT NOT NULL REFERENCES users(id),
    order_id BIGINT NOT NULL REFERENCES orders(id),
    rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT NOW(),

    UNIQUE (user_id, order_id)
);

CREATE TABLE chats (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id),
    vendor_id BIGINT NOT NULL REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW(),

    UNIQUE (user_id, vendor_id)
);

CREATE TABLE messages (
    id BIGSERIAL PRIMARY KEY,
    chat_id BIGINT NOT NULL REFERENCES chats(id),
    sender_id BIGINT NOT NULL REFERENCES users(id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE vendor_preferred_locations (
    vendor_id BIGINT NOT NULL REFERENCES users(id),
    location_id BIGINT NOT NULL REFERENCES locations(id),

    CONSTRAINT vendor_preferred_locations_pk PRIMARY KEY (vendor_id, location_id)
);
