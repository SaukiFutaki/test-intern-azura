CREATE TABLE `book` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`author` text NOT NULL,
	`publication_date` integer NOT NULL,
	`image_url` text NOT NULL,
	`publisher` text NOT NULL,
	`number_of_pages` integer NOT NULL,
	`category_id` text NOT NULL,
	`user_id` text NOT NULL,
	FOREIGN KEY (`category_id`) REFERENCES `book_category`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `book_category` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`user_id` text NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE cascade
);
