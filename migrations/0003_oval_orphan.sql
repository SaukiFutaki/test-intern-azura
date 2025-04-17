CREATE TABLE `book_to_category` (
	`id` text PRIMARY KEY NOT NULL,
	`book_id` text NOT NULL,
	`category_id` text NOT NULL,
	FOREIGN KEY (`book_id`) REFERENCES `book`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`category_id`) REFERENCES `book_category`(`id`) ON UPDATE no action ON DELETE cascade
);
